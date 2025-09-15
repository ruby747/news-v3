export interface TrendsArticle {
  title: string;
  url?: string;
  source?: string;
  snippet?: string;
  image?: string;
  publishedAt?: string;
}

export interface TrendsTopic {
  id: string;
  title: string;
  approxTraffic?: string;
  image?: string;
  articles: TrendsArticle[];
}

export interface TrendsData {
  updatedAt: string;
  source: string;
  geo: string;
  topics: TrendsTopic[];
}

export async function fetchTrendsData(): Promise<TrendsData | null> {
  // Use Vite base for GitHub Pages project sites
  const base = (import.meta as any).env?.BASE_URL || '/';
  const paths = [`${base}data/trends_kr.json`, `${base}data/trends_kr.sample.json`];
  for (const path of paths) {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (res.ok) {
        const json = (await res.json()) as TrendsData;
        return json;
      }
    } catch (_) {
      // try next
    }
  }
  return null;
}
