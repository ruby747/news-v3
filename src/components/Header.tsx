import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">K-Trends</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                정치
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                경제
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                사회
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                국제
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                문화
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                스포츠
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                IT/과학
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <input type="text" placeholder="뉴스 검색..." className="pl-3 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <Search className="absolute right-3 text-gray-400 w-4 h-4" />
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center relative mb-4">
              <input type="text" placeholder="뉴스 검색..." className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <Search className="absolute right-3 text-gray-400 w-4 h-4" />
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                정치
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                경제
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                사회
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                국제
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                문화
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                스포츠
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                IT/과학
              </a>
            </nav>
          </div>
        </div>}
    </header>;
}