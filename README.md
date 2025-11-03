# 차렌터카 - 차량 예약 시스템

Next.js 13+ 기반의 현대적인 차량 예약 웹사이트입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일 및 데스크톱 지원
- **실시간 검증**: React Hook Form + Zod를 활용한 폼 검증
- **이메일 전송**: Gmail SMTP를 통한 예약 정보 자동 발송
- **차량 갤러리**: 카테고리별 차량 조회 및 상세 정보
- **룰렛 이벤트**: 쿠폰 제공 이벤트 시스템
- **예약 시스템**: 차량 선택부터 예약 완료까지

## 📧 이메일 시스템 설정

예약 정보를 이메일로 받으려면 Gmail SMTP 설정이 필요합니다.

### 1. Gmail 앱 비밀번호 생성

1. [Google 계정 관리](https://myaccount.google.com) 접속
2. **보안** → **2단계 인증** 활성화
3. **보안** → **앱 비밀번호** 생성
   - 앱: "메일"
   - 기기: "기타(맞춤 이름)" → "차렌터카"
4. **16자리 앱 비밀번호** 복사 (예: `abcd efgh ijkl mnop`)

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```bash
# Gmail SMTP 설정 (필수)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=abcd-efgh-ijkl-mnop

# 관리자 이메일 주소
EMAIL_TO=admin@charentcar.com

# 사이트 정보
NEXT_PUBLIC_SITE_NAME=차렌터카
```

### 3. Gmail 설정 확인

- **앱 비밀번호**를 사용해야 하며, 일반 비밀번호로는 작동하지 않습니다.
- **2단계 인증**이 반드시 활성화되어 있어야 합니다.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
