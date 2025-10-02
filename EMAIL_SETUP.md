# 메시지 전송 기능 설정 가이드

포트폴리오에서 메시지 전송 기능을 사용하려면 EmailJS를 설정해야 합니다.

## 1. EmailJS 계정 생성 및 설정

### 1.1 EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정 생성 (월 200개 이메일 무료)

### 1.2 이메일 서비스 연결

1. EmailJS 대시보드에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. Gmail, Outlook 등 원하는 이메일 서비스 선택
4. 이메일 계정 연결 및 인증

### 1.3 이메일 템플릿 생성

1. "Email Templates" 클릭
2. "Create New Template" 클릭
3. 다음 변수들을 템플릿에 추가:
   ```
   {{from_name}} - 보낸 사람 이름
   {{from_email}} - 보낸 사람 이메일
   {{subject}} - 제목
   {{message}} - 메시지 내용
   {{to_email}} - 받는 사람 이메일
   ```

### 1.4 API 키 확인

1. "Account" → "General"에서 Public Key 확인
2. "Email Services"에서 Service ID 확인
3. "Email Templates"에서 Template ID 확인

## 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 3. 대안 방법들

### 3.1 Netlify Forms (Netlify 배포시)

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- 폼 필드들 -->
</form>
```

### 3.2 Vercel Forms (Vercel 배포시)

```javascript
// API 라우트 생성: pages/api/contact.js
export default async function handler(req, res) {
  // 이메일 전송 로직
}
```

### 3.3 Google Forms 연동

1. Google Forms 생성
2. 폼 URL을 iframe으로 임베드
3. 가장 간단하지만 커스터마이징 제한

## 4. 보안 고려사항

1. **환경변수 사용**: API 키를 코드에 직접 노출하지 마세요
2. **Rate Limiting**: 스팸 방지를 위한 제한 설정
3. **입력 검증**: 사용자 입력값 검증 및 sanitization
4. **CORS 설정**: 필요한 경우 CORS 정책 설정

## 5. 테스트

설정 완료 후:

1. 개발 서버 재시작: `npm run dev`
2. Contact 폼에서 테스트 메시지 전송
3. 이메일 수신 확인

## 6. 문제 해결

### 일반적인 오류들:

- **401 Unauthorized**: API 키가 잘못됨
- **400 Bad Request**: 템플릿 변수가 잘못됨
- **Network Error**: CORS 또는 네트워크 문제

### 디버깅:

1. 브라우저 개발자 도구 콘솔 확인
2. EmailJS 대시보드에서 로그 확인
3. 환경변수 값 확인
