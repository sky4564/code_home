# 이벤트 배너 생성 가이드

## 타입 A: 3D 플랫폼 + 차량 카드 레이아웃

### 📋 개요

원본 이미지를 기반으로 한 이벤트 배너 컴포넌트. 왼쪽에 3D 원형 플랫폼 위의 메인 차량과 오른쪽에 관련 차량 카드들을 배치한 구성.

### 🎨 디자인 구성 요소

#### 1. 레이아웃 구조

```
┌─────────────────────────────────────────────────┐
│  [배경 장식들 + 광선 효과]                        │
│  ┌─────────────────┐  ┌──────────────────────┐  │
│  │                 │  │  ┌─────────────────┐ │  │
│  │   PROMOTION     │  │  │   차량 카드 1   │ │  │
│  │                 │  │  └─────────────────┘ │  │
│  │ 2026 신차 OPEN  │  │  ┌─────────────────┐ │  │
│  │                 │  │  │   차량 카드 2   │ │  │
│  │   [3D 플랫폼]   │  │  └─────────────────┘ │  │
│  │   [메인 차량]   │  │  ┌─────────────────┐ │  │
│  │                 │  │  │   차량 카드 3   │ │  │
│  │                 │  │  └─────────────────┘ │  │
│  └─────────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────┘
```

#### 2. 배경 디자인

- **베이스 배경**: `bg-gradient-to-br from-blue-50 via-white to-blue-100`
- **다이아몬드 장식**: 노란색/회색 다이아몬드들을 `rotate-45`로 회전하여 배치
- **광선 효과**: `skew-x-12` transform을 사용한 대각선 광선

```css
/* 다이아몬드 장식 예시 */
.diamond-yellow {
  @apply w-8 h-8 bg-yellow-400 opacity-70 transform rotate-45;
}
.diamond-gray {
  @apply w-6 h-6 bg-gray-300 opacity-60 transform rotate-45;
}

/* 광선 효과 */
.light-ray {
  @apply bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-50;
}
```

#### 3. 왼쪽 메인 섹션

##### PROMOTION 배지

- **스타일**: `bg-gradient-to-r from-cyan-400 to-blue-600`
- **텍스트**: 흰색, 굵은 글씨
- **위치**: 상단 좌측

##### 메인 타이틀

- **구성**: "2026" (사이안색) + "신차 OPEN" (검은색)
- **크기**: `text-5xl md:text-6xl font-bold`
- **색상**:
  - "2026": `text-cyan-500`
  - "신차 OPEN": `text-gray-900`

##### 3D 원형 플랫폼

```css
/* 3단계 플랫폼 구조 */
.platform-shadow {
  @apply bg-gradient-radial from-gray-800 to-gray-600 scale-110 opacity-30;
}
.platform-main {
  @apply bg-gradient-radial from-gray-500 to-gray-700;
}
.platform-top {
  @apply bg-gradient-radial from-gray-400 to-gray-600;
}
```

- **구조**: 3단계 원형 플랫폼 (그림자 → 메인 → 상단)
- **크기**: `w-80 h-80`
- **효과**: 그라데이션으로 입체감 표현

#### 4. 오른쪽 차량 카드들

##### 카드 구조

```jsx
<div className="flex gap-4 items-center p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl border border-blue-200/50">
  {/* 차량 이미지 */}
  <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center">
    <Image src={vehicle.image} alt={vehicle.name} />
  </div>

  {/* 차량 정보 */}
  <div className="flex-1">
    <div className="text-xs text-blue-600 font-medium">{vehicle.category}</div>
    <h3 className="text-sm font-bold text-gray-900">{vehicle.name}</h3>
    <p className="text-xs text-gray-600">{vehicle.description}</p>
  </div>
</div>
```

##### 스타일링 포인트

- **배경**: 파란색 그라데이션 (`from-blue-100 to-blue-200`)
- **이미지 컨테이너**: 흰색 배경의 정사각형
- **텍스트 위계**: 카테고리 → 차량명 → 설명 순서
- **호버 효과**: `hover:shadow-lg transition-all duration-300`

### 🔧 구현 핵심 포인트

#### 1. 반응형 디자인

- **데스크톱**: `lg:flex-row` (좌우 배치)
- **모바일**: `flex-col` (상하 배치)
- **타이틀 크기**: `text-5xl md:text-6xl`

#### 2. 이미지 최적화

- Next.js `Image` 컴포넌트 사용
- `priority` 속성으로 메인 이미지 우선 로딩
- `object-contain`으로 비율 유지

#### 3. 접근성 고려사항

- 적절한 `alt` 텍스트 제공
- 색상 대비 확보 (텍스트 가독성)
- 키보드 네비게이션 지원

### 📝 사용 예시

```jsx
// 차량 데이터 구조
const vehicles = [
  {
    id: "carnival_2026",
    name: "2026 더 뉴 카니발 9인승",
    category: "승합차",
    description: "프리미엄 패밀리카",
    image: "/main_cars/2026_carnival.png",
  },
  // ... 추가 차량들
];

// 컴포넌트 사용
<EventBanner vehicles={vehicles} mainImage="/main_cars/2026_carnival.png" />;
```

### 🎯 성공 요인

1. **원본 충실도**: 제공된 이미지의 레이아웃과 색상 구성을 정확히 재현
2. **3D 효과**: CSS만으로 입체적인 플랫폼 표현
3. **일관된 디자인**: 전체적인 색상 팔레트와 스타일 통일성
4. **실용적 구성**: 차량 정보를 효과적으로 전달하는 카드 디자인
5. **반응형 대응**: 다양한 화면 크기에서 최적화된 레이아웃

---

**생성일**: 2025-09-18  
**버전**: 1.0  
**적용 프로젝트**: 차렌터카 홈페이지

