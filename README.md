### Command Block

```js

// START
npm run dev

// Planetscale에 로그인
pscale auth login

// Planetscale에서 저희 DB에 접속
pscale connect [DB_NAME]

```

---

```js

// prisma migrate, 스키마에서 모델의 모습을 수정 했을때 migrate를 해줘야 db에서 수정을 인식함
npx prisma db push

// 실시간으로 DB의 흐름을 보거나 수정 가능한 어드민 패널
npx prisma studio

```

### 진행

---

| 구현 | 기능 설명                                                                                     |
| ---- | --------------------------------------------------------------------------------------------- |
| ❎   | Typescript 셋업                                                                               |
| ❎   | Express 셋업                                                                                  |
| ❎   | Prisma 모델 스키마 생성 (User, Product)                                                       |
| ❎   | 임시 라우터 설정과 GET POST 요청 관리                                                         |
| ❎   | Planetscale에 연동과 실제 유저 생성 확인                                                      |
| ❎   | 제품 생성시 유저와 외래키 연동                                                                |
| 🔧   | JWT 로그인 임시구현 ✅ / ME 로그인된 유저 임시 구현 / 인증 Provider ❌ / 토큰 삭제 와 확인 ❌ |
| ❌   | 전체 오류 캐치 ✅ / 비동기 에러 ✅ / 404 에러 ❌ / 에러 상태 설명 ❌                          |
| ❌   | 디렉토리 구조 설계 의논                                                                       |
| ❌   | Prisma와 Planetscale 설명                                                                     |

---

### App 모델

<br>

```bash
├── common
│   ├── created (created time)
│   ├── modified (last update time)
├── user
│   ├── id          String
│   ├── username    String
│   ├── password    String
│   ├── avatar      String
│   ├── phone       Int
│   ├── Token       Token[]
│   └── Product     Product[]
├── Token
│   ├── id          String
│   ├── username    String
│   ├── revoked     Boolean
│   ├── user        User
│   └── userId      Int
├── Product
│   ├── id          Int
│   ├── image       String
│   ├── name        String
│   ├── price       Int
│   ├── description String
│   ├── user        User
│   └── userId      Int
└──
```

<br>

---
