import React, { useState } from 'react';
import { NewsTile } from './NewsTile';
interface NewsCategory {
  id: number;
  name: string;
  news: Array<{
    id: number;
    title: string;
    summary: string;
    imageUrl: string;
    source: string;
    publishedAt: string;
  }>;
}
interface NewsGridProps {
  categories: NewsCategory[];
}
export function NewsGrid({
  categories
}: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState<number>(categories[0].id);
  const activeNews = categories.find(category => category.id === activeCategory)?.news || [];
  return <section>
      <div className="mb-6 border-b">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 mr-2 whitespace-nowrap font-medium text-sm rounded-t-lg ${activeCategory === category.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>
              {category.name}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeNews.map((news, index) => <NewsTile key={news.id} news={news} featured={index === 0} />)}
      </div>
    </section>;
}