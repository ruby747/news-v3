#!/usr/bin/env node
// Fetch Google Trends real-time trends for KR and emit JSON to public/data/trends_kr.json
// Designed for GitHub Actions (Node 20+ has global fetch).

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';

async function ensureDir(path) {
  try {
    await mkdir(path, { recursive: true });
  } catch {}
}

async function main() {
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
  const outPath = resolve(process.cwd(), 'public/data/trends_kr.json');
  const res = await fetch(rtUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Referer': 'https://trends.google.com/trends/trendingsearches/realtime?geo=KR&hl=ko',
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Failed to fetch realtime trends: ${res.status} ${res.statusText} | body: ${body.slice(0,200)}`);
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

  const out = {
    updatedAt: new Date().toISOString(),
    source: 'google-trends-realtime',
    geo: 'KR',
    topics,
  };

  await ensureDir(dirname(outPath));
  await writeFile(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Wrote ${outPath} with ${topics.length} topics.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
