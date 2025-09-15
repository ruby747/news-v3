#!/usr/bin/env node
// Fetch Google Trends realtime (KR). If it fails (e.g., 404), fall back to Daily RSS.
// Output JSON to public/data/trends_kr.json. Designed for GitHub Actions.

import { writeFile, mkdir, copyFile, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';

async function ensureDir(path) {
  try {
    await mkdir(path, { recursive: true });
  } catch {}
}

async function fetchRealtimeKR() {
  const params = new URLSearchParams({
    hl: 'ko',
    tz: '-540',
    cat: 'all',
    geo: 'KR',
    fi: '15',
    fs: '15',
    ri: '300',
    rs: '20',
    sort: '0',
  });
  const rtUrl = `https://trends.google.com/trends/api/realtimetrends?${params.toString()}`;
  const res = await fetch(rtUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Referer': 'https://trends.google.com/trends/trendingsearches/realtime?geo=KR&hl=ko',
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`realtime ${res.status} ${res.statusText} | body: ${body.slice(0, 120)}`);
  }
  let text = await res.text();
  // Remove XSSI prefix ")]}'" if present
  if (text.startsWith("\')]}") || text.startsWith(")]}'")) {
    text = text.substring(text.indexOf('\n') + 1);
  }
  const data = JSON.parse(text);

  const stories = data?.storySummaries?.trendingStories || [];
  const topics = stories.map((s, idx) => {
    const title = s?.title || (Array.isArray(s?.entityNames) ? s.entityNames.join(', ') : '') || `Topic ${idx + 1}`;
    const articles = (s?.articles || []).map(a => ({
      title: a?.articleTitle || a?.title || '',
      url: a?.url || a?.articleUrl,
      source: a?.source || a?.sourceName,
      snippet: a?.snippet || a?.summary,
      image: a?.image?.imgUrl || a?.imageUrl || s?.image?.imgUrl,
      publishedAt: a?.time || a?.published,
    }));
    const image = s?.image?.imgUrl || articles?.[0]?.image;
    return {
      id: s?.shareUrl || s?.id || `t-${idx}`,
      title,
      approxTraffic: undefined,
      image,
      articles,
    };
  });

  return {
    updatedAt: new Date().toISOString(),
    source: 'google-trends-realtime',
    geo: 'KR',
    topics,
  };
}

async function fetchDailyRssKR() {
  const rssUrl = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR&hl=ko';
  // dynamic import for optional dep
  const { XMLParser } = await import('fast-xml-parser');
  const res = await fetch(rssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/rss+xml,text/xml;q=0.9,*/*;q=0.8',
      'Referer': 'https://trends.google.com/',
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`rss ${res.status} ${res.statusText} | body: ${body.slice(0, 120)}`);
  }
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel;
  const items = Array.isArray(channel?.item) ? channel.item : channel?.item ? [channel.item] : [];
  const topics = items.map((it, idx) => {
    const title = it.title || '';
    const approxTraffic = it['ht:approx_traffic'] || undefined;
    const image = it['ht:picture'] || undefined;
    let newsItems = it['ht:news_item'];
    if (newsItems && !Array.isArray(newsItems)) newsItems = [newsItems];
    const articles = (newsItems || []).map(ni => ({
      title: ni['ht:news_item_title'] || '',
      url: ni['ht:news_item_url'] || undefined,
      source: ni['ht:news_item_source'] || undefined,
      snippet: ni['ht:news_item_snippet'] || undefined,
      image: ni['ht:news_item_image'] || image || undefined,
      publishedAt: it.pubDate || undefined,
    }));
    return {
      id: `t-${idx}`,
      title,
      approxTraffic,
      image,
      articles,
    };
  });

  return {
    updatedAt: new Date().toISOString(),
    source: 'google-trends-daily-rss',
    geo: 'KR',
    topics,
  };
}

async function main() {
  const outPath = resolve(process.cwd(), 'public/data/trends_kr.json');
  let data;
  // Prefer Daily RSS for breadth; fallback to realtime; then sample
  try {
    data = await fetchDailyRssKR();
    console.log('Fetched daily RSS trends.');
  } catch (e) {
    console.warn('Daily RSS fetch failed:', e?.message || e);
    try {
      data = await fetchRealtimeKR();
      console.log('Fell back to realtime trends.');
    } catch (e2) {
      console.warn('Realtime fetch failed:', e2?.message || e2);
      // As a last resort, copy sample JSON if exists
      const sample = resolve(process.cwd(), 'public/data/trends_kr.sample.json');
      try {
        const content = await readFile(sample, 'utf8');
        await ensureDir(dirname(outPath));
        await writeFile(outPath, content, 'utf8');
        console.log('Wrote sample trends JSON as fallback.');
        process.exit(0);
      } catch (e3) {
        console.error('No data produced (rss/realtime/sample failed).');
        process.exit(1);
      }
    }
  }

  await ensureDir(dirname(outPath));
  await writeFile(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Wrote ${outPath} with ${data.topics?.length || 0} topics.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
