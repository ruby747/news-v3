import React from 'react';
import { NewsTile } from './NewsTile';

export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  url?: string;
}

interface TopicArticlesGridProps {
  topicTitle?: string;
  articles: ArticleItem[];
}

export function TopicArticlesGrid({ topicTitle, articles }: TopicArticlesGridProps) {
  return (
    <section>
      {topicTitle && (
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">{topicTitle}</h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((news, index) => (
          <NewsTile
            key={news.id}
            news={{
              id: index + 1,
              title: news.title,
              summary: news.summary,
              imageUrl: news.imageUrl,
              source: news.source,
              publishedAt: news.publishedAt,
              url: news.url,
            }}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

