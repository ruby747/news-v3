import React from 'react';
import { TrendingUp } from 'lucide-react';
interface TrendingTopic {
  id: string;
  title: string;
  approxTraffic?: string;
  image?: string;
}
interface TrendingTopicsProps {
  topics: TrendingTopic[];
  activeId?: string;
  onSelect?: (id: string) => void;
}
export function TrendingTopics({ topics, activeId, onSelect }: TrendingTopicsProps) {
  return <section className="mb-10">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="text-red-500 w-5 h-5" />
        <h2 className="text-xl font-bold">실시간 인기 검색어</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {topics.map((topic, index) => (
          <button
            key={topic.id}
            onClick={() => onSelect?.(topic.id)}
            className={`text-left bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200 border ${
              activeId === topic.id ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <div className="flex items-start">
              <span className="text-lg font-bold text-blue-600 mr-3">{index + 1}</span>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 line-clamp-2">{topic.title}</h3>
                {topic.approxTraffic && (
                  <p className="text-xs text-gray-500 mt-1">검색량 {topic.approxTraffic}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>;
}
