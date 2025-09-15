import React, { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { TrendingTopics } from './components/TrendingTopics';
import { Footer } from './components/Footer';
import { TopicArticlesGrid } from './components/TopicArticlesGrid';
import { fetchTrendsData } from './services/trends';
export function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | undefined>(undefined);
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [dataSource, setDataSource] = useState<string | undefined>(undefined);
  const [topics, setTopics] = useState<
    Array<{
      id: string;
      title: string;
      approxTraffic?: string;
      image?: string;
      articles: Array<{
        title: string;
        url?: string;
        source?: string;
        snippet?: string;
        image?: string;
        publishedAt?: string;
      }>;
    }>
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTrendsData();
        if (!data) throw new Error('트렌드 데이터를 불러올 수 없습니다.');
        setTopics(data.topics ?? []);
        setDataSource(data.source);
        setActiveId(data.topics?.[0]?.id);
        setVisibleCount(20);
      } catch (e: any) {
        setError(e?.message ?? '오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const activeTopic = useMemo(() => topics.find(t => t.id === activeId), [topics, activeId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
            {error}
          </div>
        )}
        {!error && (
          <div className="mb-3 text-xs text-gray-500">
            <span>데이터 소스: {dataSource === 'google-trends-realtime' ? '실시간' : dataSource === 'google-trends-daily-rss' ? '일간 RSS' : dataSource === 'google-trends-rss' ? '일간 RSS' : dataSource === 'google-trends-realtimetrends' ? '실시간' : dataSource || '알 수 없음'}</span>
            {topics?.length ? <span className="ml-2">토픽 {topics.length}개</span> : null}
          </div>
        )}
        <TrendingTopics topics={topics.slice(0, visibleCount)} activeId={activeId} onSelect={setActiveId} />
        {topics.length > visibleCount && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded hover:bg-blue-50"
              onClick={() => setVisibleCount(c => c + 20)}
            >
              더보기
            </button>
          </div>
        )}
        {loading ? (
          <div className="text-gray-500">불러오는 중...</div>
        ) : (
          <TopicArticlesGrid
            topicTitle={activeTopic?.title}
            articles={(activeTopic?.articles || []).map((a, idx) => ({
              id: `${activeTopic?.id}-${idx}`,
              title: a.title,
              summary: a.snippet || '',
              imageUrl: a.image || 'https://via.placeholder.com/640x360?text=News',
              source: a.source || '뉴스',
              publishedAt: a.publishedAt || '',
              url: a.url,
            }))}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
