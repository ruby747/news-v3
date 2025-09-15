import React from 'react';
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  url?: string;
}
interface NewsTileProps {
  news: NewsItem;
  featured?: boolean;
}
export function NewsTile({ news, featured = false }: NewsTileProps) {
  const content = (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <div className={`relative ${featured ? 'h-64' : 'h-40'}`}>
        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-gray-900 line-clamp-2 ${featured ? 'text-xl' : 'text-base'}`}>
          {news.title}
        </h3>
        <p className={`text-gray-600 mt-2 line-clamp-2 ${featured ? 'block' : 'hidden sm:block'}`}>
          {news.summary}
        </p>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span>{news.source}</span>
          <span>{news.publishedAt}</span>
        </div>
      </div>
    </div>
  );

  return news.url ? (
    <a href={news.url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
