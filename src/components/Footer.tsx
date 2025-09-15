import React from 'react';
export function Footer() {
  return <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">K-Trends</h3>
            <p className="text-gray-300 text-sm">
              최신 트렌드와 뉴스를 한눈에 볼 수 있는 뉴스 포털입니다.
            </p>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">카테고리</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  정치
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  경제
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  사회
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  문화
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  뉴스레터
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  모바일 앱
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  광고 문의
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  제휴 문의
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-bold mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2023 K-Trends. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}