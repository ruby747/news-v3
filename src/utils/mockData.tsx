import React from 'react';
export const mockNewsData = {
  trendingTopics: [{
    id: 1,
    title: '코로나19 백신 접종',
    searchCount: '1.2만'
  }, {
    id: 2,
    title: '월드컵 예선',
    searchCount: '8,500'
  }, {
    id: 3,
    title: '부동산 대책',
    searchCount: '7,300'
  }, {
    id: 4,
    title: '추석 연휴',
    searchCount: '6,900'
  }, {
    id: 5,
    title: '비트코인',
    searchCount: '5,600'
  }, {
    id: 6,
    title: '주식시장',
    searchCount: '5,100'
  }, {
    id: 7,
    title: '태풍 북상',
    searchCount: '4,800'
  }, {
    id: 8,
    title: '대통령 지지율',
    searchCount: '4,200'
  }, {
    id: 9,
    title: '신규 확진자',
    searchCount: '3,800'
  }, {
    id: 10,
    title: '배우 김수현',
    searchCount: '3,500'
  }],
  categories: [{
    id: 1,
    name: '정치',
    news: [{
      id: 101,
      title: '대통령, 신년 기자회견에서 경제 회복 의지 강조',
      summary: '대통령은 오늘 청와대에서 열린 신년 기자회견에서 코로나19로 인한 경제 위기 극복을 위한 강력한 의지를 표명했습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '연합뉴스',
      publishedAt: '2시간 전'
    }, {
      id: 102,
      title: '국회, 추경예산안 처리 난항...여야 대치',
      summary: '추가경정예산안 처리를 두고 여야 간 대립이 심화되고 있습니다. 야당은 예산 삭감을 주장하며 반발하고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: 'KBS 뉴스',
      publishedAt: '5시간 전'
    }, {
      id: 103,
      title: '외교부, 한미일 안보협력 강화 방안 논의',
      summary: '외교부는 오늘 한미일 3국 안보협력 강화 방안을 논의하기 위한 고위급 회담을 개최했다고 밝혔습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: 'MBC 뉴스',
      publishedAt: '7시간 전'
    }, {
      id: 104,
      title: '지방선거 앞두고 여야 공약 경쟁 치열',
      summary: '다가오는 지방선거를 앞두고 여야 정당들의 공약 경쟁이 치열해지고 있습니다. 각 당은 부동산 정책과 일자리 창출에 초점을 맞추고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: 'SBS 뉴스',
      publishedAt: '9시간 전'
    }, {
      id: 105,
      title: '정부, 탄소중립 로드맵 발표..."2050년까지 달성"',
      summary: '정부가 오늘 2050년까지 탄소중립을 달성하기 위한 구체적인 로드맵을 발표했습니다. 신재생에너지 확대와 산업구조 전환이 핵심입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '중앙일보',
      publishedAt: '12시간 전'
    }]
  }, {
    id: 2,
    name: '경제',
    news: [{
      id: 201,
      title: '한국은행, 기준금리 0.25%p 인상...인플레이션 대응',
      summary: '한국은행이 인플레이션 압력에 대응하기 위해 기준금리를 0.25%p 인상했습니다. 이는 지난 3개월 만의 추가 인상입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '매일경제',
      publishedAt: '1시간 전'
    }, {
      id: 202,
      title: '삼성전자, 신형 폴더블 스마트폰 출시...글로벌 시장 공략',
      summary: '삼성전자가 새로운 폴더블 스마트폰을 출시하며 글로벌 시장 공략에 나섰습니다. 혁신적인 디자인과 성능 개선이 특징입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '전자신문',
      publishedAt: '3시간 전'
    }, {
      id: 203,
      title: '원자재 가격 급등...제조업체 비상',
      summary: '국제 원자재 가격이 급등하면서 국내 제조업체들이 비상이 걸렸습니다. 생산원가 상승으로 인한 수익성 악화가 우려됩니다.',
      imageUrl: 'https://images.unsplash.com/photo-1518544801976-5e98ac8dbd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '한국경제',
      publishedAt: '6시간 전'
    }, {
      id: 204,
      title: '부동산 시장 냉각...8월 거래량 전월 대비 30% 감소',
      summary: '정부의 강력한 규제 정책으로 인해 부동산 시장이 급격히 냉각되고 있습니다. 8월 거래량은 전월 대비 30% 감소했습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '부동산경제',
      publishedAt: '8시간 전'
    }, {
      id: 205,
      title: '코스피, 외국인 매수세에 상승 마감',
      summary: '오늘 코스피는 외국인 투자자들의 매수세에 힘입어 상승 마감했습니다. 특히 반도체와 2차전지 관련주가 강세를 보였습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '서울경제',
      publishedAt: '10시간 전'
    }]
  }, {
    id: 3,
    name: '사회',
    news: [{
      id: 301,
      title: '코로나19 신규 확진자 500명대...4차 유행 진정세',
      summary: '국내 코로나19 신규 확진자 수가 500명대로 감소하며 4차 유행이 진정세를 보이고 있습니다. 방역당국은 여전히 경계를 늦추지 않고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '질병관리청',
      publishedAt: '30분 전'
    }, {
      id: 302,
      title: '서울 지하철 파업 예고...시민 불편 우려',
      summary: '서울 지하철 노조가 내일부터 파업을 예고해 시민들의 불편이 예상됩니다. 서울시는 비상 수송 대책을 마련하고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1565812125742-5ad1e15b8806?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '서울신문',
      publishedAt: '2시간 전'
    }, {
      id: 303,
      title: '추석 연휴 고속도로 정체 예상...귀성길 피해야 할 시간대는?',
      summary: '한국도로공사는 다가오는 추석 연휴 기간 동안 고속도로 정체가 극심할 것으로 예상했습니다. 귀성길은 오전 7시부터 오후 2시까지 피하는 것이 좋습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1566193255494-54b15e1ed9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '교통방송',
      publishedAt: '4시간 전'
    }, {
      id: 304,
      title: '서울 아파트 평균 가격 10억 돌파...역대 최고치',
      summary: '서울 아파트 평균 가격이 처음으로 10억원을 돌파하며 역대 최고치를 기록했습니다. 전문가들은 당분간 상승세가 이어질 것으로 전망했습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '부동산114',
      publishedAt: '7시간 전'
    }, {
      id: 305,
      title: '중부지방 집중호우 피해 속출...복구 작업 진행 중',
      summary: '중부지방에 내린 집중호우로 인해 침수와 산사태 등 피해가 속출하고 있습니다. 관계 당국은 피해 복구 작업을 진행 중입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '기상청',
      publishedAt: '9시간 전'
    }]
  }, {
    id: 4,
    name: '문화/연예',
    news: [{
      id: 401,
      title: "영화 '기생충', 또 다른 국제영화제서 대상 수상",
      summary: "봉준호 감독의 영화 '기생충'이 또 다른 국제영화제에서 대상을 수상하며 한국 영화의 위상을 높였습니다.",
      imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '영화진흥위원회',
      publishedAt: '1시간 전'
    }, {
      id: 402,
      title: '방탄소년단, 빌보드 핫100 1위 달성...K팝 새 역사',
      summary: '방탄소년단이 새 싱글로 빌보드 핫100 차트 1위를 달성하며 K팝의 새로운 역사를 썼습니다. 이는 그룹의 5번째 핫100 1위입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '빌보드',
      publishedAt: '3시간 전'
    }, {
      id: 403,
      title: '넷플릭스, 한국 오리지널 시리즈 추가 제작 발표',
      summary: '넷플릭스가 한국 오리지널 시리즈를 추가로 제작한다고 발표했습니다. K-콘텐츠의 글로벌 인기에 힘입어 투자를 확대할 계획입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '넷플릭스 코리아',
      publishedAt: '5시간 전'
    }, {
      id: 404,
      title: '유명 작가 신작 소설, 출간 하루만에 베스트셀러 1위',
      summary: '유명 작가의 신작 소설이 출간 하루 만에 베스트셀러 1위에 올랐습니다. 독자들의 뜨거운 반응이 이어지고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '교보문고',
      publishedAt: '8시간 전'
    }, {
      id: 405,
      title: "국립중앙박물관, 특별전 '한국의 미' 개최",
      summary: "국립중앙박물관이 특별전 '한국의 미'를 개최합니다. 이번 전시에서는 한국 전통 예술의 아름다움을 재조명합니다.",
      imageUrl: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '문화체육관광부',
      publishedAt: '11시간 전'
    }]
  }, {
    id: 5,
    name: 'IT/과학',
    news: [{
      id: 501,
      title: '애플, 신형 아이폰 공개...폴더블폰 출시 가능성도',
      summary: '애플이 신형 아이폰을 공개했습니다. 업계에서는 애플이 폴더블폰 시장에 진출할 가능성도 제기되고 있습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '테크크런치',
      publishedAt: '2시간 전'
    }, {
      id: 502,
      title: '구글, 인공지능 기술 활용한 새로운 검색 기능 발표',
      summary: '구글이 인공지능 기술을 활용한 새로운 검색 기능을 발표했습니다. 사용자 의도를 더 정확히 파악하는 기술이 적용됐습니다.',
      imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '구글 블로그',
      publishedAt: '4시간 전'
    }, {
      id: 503,
      title: "국내 첫 우주발사체 '누리호', 10월 발사 예정",
      summary: "국내 첫 우주발사체인 '누리호'가 오는 10월 발사될 예정입니다. 한국 우주 산업의 새로운 이정표가 될 전망입니다.",
      imageUrl: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '한국항공우주연구원',
      publishedAt: '6시간 전'
    }, {
      id: 504,
      title: '메타버스 시장 급성장...국내 기업들도 투자 확대',
      summary: '메타버스 시장이 급성장하면서 국내 기업들도 관련 분야에 대한 투자를 확대하고 있습니다. 전문가들은 차세대 성장동력이 될 것으로 전망합니다.',
      imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '디지털타임스',
      publishedAt: '9시간 전'
    }, {
      id: 505,
      title: '자율주행차 상용화 앞당겨진다...규제 완화 추진',
      summary: '정부가 자율주행차 상용화를 앞당기기 위해 관련 규제 완화를 추진합니다. 2025년까지 레벨4 자율주행 상용화가 목표입니다.',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      source: '국토교통부',
      publishedAt: '12시간 전'
    }]
  }]
};