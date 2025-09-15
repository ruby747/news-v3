# K‑Trends (Google Trends → 타일형 뉴스)

구글 트렌드(대한민국) 실시간 인기 검색어와 관련 뉴스 기사를 타일형으로 보여주는 웹앱입니다. GitHub Pages에서 정적 호스팅을 고려해, GitHub Actions가 정기적으로 Google Trends "실시간 트렌드" API를 가져와 JSON으로 변환하고, 프론트엔드는 해당 JSON을 불러와 렌더링합니다.

## 개발 실행

1. `npm install`
2. `npm run dev`

프론트엔드는 `public/data/trends_kr.json`을 먼저 시도하고, 없으면 `public/data/trends_kr.sample.json`으로 폴백합니다.

## 데이터 파이프라인 (GitHub Actions)

- 워크플로: `.github/workflows/fetch-trends.yml`
- 스크립트: `scripts/fetch-trends.mjs`
- 출력 파일: `public/data/trends_kr.json`

작동 방식:
- 30분 간격으로 먼저 Google Trends Daily RSS(KR)를 가져오고, 실패 시 Real-time(KR)로 폴백합니다. 둘 다 실패하면 샘플 JSON으로 대체합니다.
- 각 토픽의 제목, 대략적 검색량(가능 시), 대표 이미지(가능 시), 관련 뉴스(제목/출처/URL/스니펫/이미지)를 JSON으로 저장합니다.
- 변경이 있으면 커밋/푸시합니다.

## UI 메모

- 상단에 데이터 소스와 토픽 개수를 표시합니다.
- 토픽은 처음 20개만 보여주고 “더보기” 버튼으로 20개씩 추가 로드합니다.

## 배포 (GitHub Pages)

Vite 정적 사이트이므로 GitHub Pages에 그대로 호스팅할 수 있습니다. Pages로 배포 시 리포지토리 경로가 서브패스인 경우 Vite `base` 설정이 필요할 수 있습니다.

## 주의사항

- Google Trends 실시간 JSON은 모든 기사에 이미지를 제공하지 않을 수 있습니다. 이미지가 없을 경우 플레이스홀더를 사용합니다.
- 브라우저에서 직접 API를 호출하지 않고(웹 CORS 회피), Actions가 JSON으로 변환해 정적으로 제공합니다.
