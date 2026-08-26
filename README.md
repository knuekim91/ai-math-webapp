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

- **상관관계 시각화** (`unit3-data-analysis/correlation.html`): 산점도에
  점을 찍고 드래그하며 피어슨 상관계수 r과 회귀직선이 실시간으로 바뀌는 것을
  확인합니다. 비선형 관계 예시로 상관계수의 한계도 짚어줍니다.
- **표본추출 시뮬레이터** (`unit3-data-analysis/sampling-simulator.html`):
  모집단 분포(균등/종모양/치우침)에서 표본을 반복 추출해 표본평균의 분포가
  좁아지는 과정을 보여주고, 실험적 표준오차를 이론값 σ/√n과 비교합니다.
- **벡터와 행렬 연산** (`unit2-data-representation/vector-matrix.html`): 벡터
  모드에서 화살표를 드래그해 덧셈·뺄셈·스칼라배·내적을 눈으로 확인하고, 행렬
  모드에서 크기를 골라 덧셈·뺄셈·스칼라배·곱셈을 계산하며 곱셈 결과 칸을
  클릭하면 계산 과정을 보여줍니다.
- **텍스트 유사도** (`unit2-data-representation/text-similarity.html`): 두
  문장을 토큰화 → 불용어 제거 → 빈도 벡터 → 코사인 유사도 계산까지 단계별로
  보여줍니다.
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
