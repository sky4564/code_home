# 모바일 우선 반응형 개발 가이드

## 📱 기본 원칙

### 1. Mobile First 접근

- 기본 스타일은 모바일(320px~)을 기준으로 작성
- 큰 화면은 `sm:`, `md:`, `lg:`, `xl:` 브레이크포인트로 확장

### 2. Tailwind CSS 브레이크포인트

```
기본 (xs): 0px ~ 639px (모바일)
sm: 640px ~ 767px (큰 모바일/작은 태블릿)
md: 768px ~ 1023px (태블릿)
lg: 1024px ~ 1279px (작은 데스크톱)
xl: 1280px ~ 1535px (데스크톱)
2xl: 1536px+ (큰 데스크톱)
```

## 🎨 레이아웃 패턴

### Grid 레이아웃

```tsx
// ❌ 잘못된 예 - 큰 화면 우선
<div className="grid grid-cols-3 sm:grid-cols-1">

// ✅ 올바른 예 - 모바일 우선
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

### Flex 레이아웃

```tsx
// ❌ 잘못된 예
<div className="flex flex-row">

// ✅ 올바른 예
<div className="flex flex-col sm:flex-row">
```

### 간격 (Spacing)

```tsx
// Padding
<div className="p-4 sm:p-6 md:p-8">

// Gap
<div className="gap-3 sm:gap-4 md:gap-6">

// Margin
<div className="mb-4 sm:mb-6 md:mb-8">
```

## 📐 컴포넌트별 체크리스트

### 카드 컴포넌트

- [ ] 모바일에서 전체 너비 (`w-full`)
- [ ] 태블릿부터 여러 열 (`sm:grid-cols-2`, `lg:grid-cols-3`)
- [ ] 패딩 반응형 (`p-4 sm:p-6 md:p-8`)
- [ ] 이미지 비율 유지 (`aspect-[16/9]`)

### 모달/팝업

- [ ] 모바일: 전체 화면 (`h-full md:h-auto`)
- [ ] 모바일: 패딩 없음 (`p-0 md:p-4`)
- [ ] 모바일: 둥근 모서리 없음 (`md:rounded-2xl`)
- [ ] 버튼 세로 배치 → 가로 (`flex-col sm:flex-row`)

### 텍스트

- [ ] 제목: `text-2xl sm:text-3xl md:text-4xl`
- [ ] 본문: `text-sm sm:text-base md:text-lg`
- [ ] Prose: `prose-sm sm:prose-base md:prose-lg`

### 이미지

- [ ] Next.js Image 컴포넌트 사용
- [ ] sizes 속성 지정: `(max-width: 640px) 100vw, 50vw`
- [ ] 모바일: 이미지 크기 축소 또는 숨김

## 🔧 필수 체크 항목

### 개발 시 확인사항

1. [ ] Chrome DevTools 모바일 뷰 테스트
2. [ ] iPhone SE (375px) 최소 너비 테스트
3. [ ] 가로 스크롤 발생 확인 (overflow-x 체크)
4. [ ] 터치 타겟 최소 크기 (44px × 44px)
5. [ ] 모바일 폰트 크기 가독성

### 공통 이슈 해결

```tsx
// 가로 스크롤 방지
<div className="w-full overflow-x-hidden">

// 전체 너비 컨테이너
<div className="w-full px-4 sm:px-6 lg:px-8">

// 이미지 반응형
<div className="relative w-full aspect-[16/9]">
  <Image fill className="object-cover" />
</div>

// 모바일 숨김/표시
<div className="hidden md:block">데스크톱만</div>
<div className="block md:hidden">모바일만</div>
```

## 📋 컴포넌트 템플릿

### 기본 섹션 템플릿

```tsx
<section className="py-8 sm:py-12 md:py-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 className="mb-6 sm:mb-8 md:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold">
      제목
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* 카드들 */}
    </div>
  </div>
</section>
```

### 카드 템플릿

```tsx
<div className="overflow-hidden bg-white rounded-xl shadow-lg">
  <div className="relative w-full aspect-[16/9]">
    <Image src="" alt="" fill className="object-cover" />
  </div>

  <div className="p-4 sm:p-6">
    <h3 className="mb-2 text-lg sm:text-xl font-bold">제목</h3>
    <p className="text-sm sm:text-base text-gray-600">설명</p>
  </div>
</div>
```

### 모달 템플릿

```tsx
<div className="fixed inset-0 z-50 flex items-start md:items-center p-0 md:p-4">
  <div className="w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] bg-white md:rounded-2xl">
    <div className="p-4 sm:p-6 md:p-8">{/* 콘텐츠 */}</div>
  </div>
</div>
```

## ⚠️ 주의사항

### 하지 말아야 할 것

1. ❌ 고정 너비 사용 (`w-[500px]`)
2. ❌ 큰 화면 우선 클래스 (`lg:grid-cols-1`)
3. ❌ 모바일에서 너무 작은 폰트 (최소 14px)
4. ❌ 가로 스크롤 발생시키는 요소
5. ❌ 모바일에서 호버 효과만 의존

### 해야 할 것

1. ✅ 상대 단위 사용 (`w-full`, `max-w-7xl`)
2. ✅ 모바일 → 데스크톱 순서로 작성
3. ✅ 적절한 터치 타겟 크기
4. ✅ 이미지 최적화 (sizes, priority)
5. ✅ 접근성 고려 (aria-label, alt)

## 🧪 테스트 체크리스트

개발 완료 후 반드시 확인:

- [ ] iPhone SE (375px) 뷰
- [ ] iPhone 12/13 (390px) 뷰
- [ ] iPad (768px) 뷰
- [ ] Desktop (1280px) 뷰
- [ ] 가로 스크롤 없음
- [ ] 모든 텍스트 읽기 가능
- [ ] 버튼/링크 터치 가능
- [ ] 이미지 정상 표시
- [ ] 레이아웃 깨짐 없음

---

**원칙**: "모바일에서 완벽하게, 데스크톱에서 더 좋게"
