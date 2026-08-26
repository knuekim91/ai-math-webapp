# 인공지능 수학 학습 도구

고등학교 「인공지능 수학」 교과서에서 다루기 어려운 개념을 학생들이 직접 조작하며
이해할 수 있도록 만든 인터랙티브 웹 학습 자료 모음입니다. 빌드 도구 없이 순수
HTML/CSS/JS로 작성되어 있어 GitHub Pages로 바로 배포되고, 파일 하나만 열어도
동작합니다.

## 사용해보기

GitHub Pages 링크: https://knuekim91.github.io/ai-math-webapp/

## 폴더 구조

```
AI_math/
├── index.html                    # 전체 단원 목차(허브 페이지)
├── assets/                       # 공통 스타일 및 스크립트
├── unit1-ai-history/             # I. 인공지능과 수학 (인공지능의 역사)
├── unit2-data-representation/    # II. 자료의 표현
├── unit3-data-analysis/          # III. 자료의 분석
├── unit4-prediction/             # IV. 인공지능과 예측
└── unit5-optimization/           # V. 인공지능과 최적화
```

각 단원 폴더 안에 주제별 독립 HTML 페이지를 추가하는 방식으로 확장합니다.

## 현재 제공 중인 도구

- **이미지와 행렬** (`unit2-data-representation/image-matrix.html`): 이미지→행렬
  모드에서 픽셀을 클릭해 RGB 값·채널·필터를 확인하고, 행렬→그림 모드에서 격자를
  색칠해 그림을 만들며 이미지가 곧 숫자 행렬임을 양방향으로 익힙니다.
- **인공지능의 역사** (`unit1-ai-history/ai-history.html`): 1900년대부터
  현재까지 AI 발달사를 타임라인으로 학습하고(학습 모드), 사건 카드를 올바른
  시대로 드래그 앤 드롭해 복습하는 도구(복습 모드).
- **경사하강법 시각화** (`unit4-prediction/gradient-descent.html`): 학습률과
  시작점을 바꿔가며 경사하강법이 함수의 최솟값을 찾아가는 과정을 관찰합니다.

## 새 도구를 추가하려면

1. 해당 단원 폴더에 새 `.html` 파일을 만들고 `assets/common.css`,
   `assets/common.js`를 상대 경로로 연결합니다.
2. `index.html`의 해당 단원 카드 목록에 링크를 추가합니다.
