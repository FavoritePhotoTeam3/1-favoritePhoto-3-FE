# 📸💕 최애의 포토

---

# **👥 스프린트 1기 3팀_FE**

최애의 포토 [배포 링크: [https://favorite-photo-3.netlify.app/]

팀 협업 [노션 링크: [https://www.notion.so/c53f7e74366d4e99b092d8a63e62d73f?v=ed50033a7c7e4b6b9dc37608e88a0318&pvs=4](https://www.notion.so/45d0984c93d146ebad41f9d4c835a0eb?pvs=21)]

---

## **👨‍👩‍👧 팀원 구성**

김대건 [개인 Github 링크: https://github.com/TradeOffEgoist] 

정준호 [개인 Github 링크: https://github.com/J-Jun5]

고종민 [개인 Github 링크: https://github.com/charlieko123]

---

## **📚 프로젝트 소개**

- 디지털 포토 카드의 등록과 거래
    
    > "최애의 포토"는 디지털 시대의 새로운 수집 문화를 선도하는 플랫폼입니다. 자신이 좋아하는 아이돌이나 스포츠 스타, 그림 등 디지털 포토카드를 손쉽게 사고팔 수 있는 공간으로, 특별한 커뮤니티를 제공합니다. 이제는 좋아하는 포토카드를 실제로 모으는 것뿐만 아니라, 디지털 자산으로 소장하며 나만의 컬렉션을 완성할 수 있습니다. 서로의 포토카드를 교환하고, 나만의 포토카드를 자랑하는 재미와 함께 상호 교류도 즐길 수 있는 플랫폼, "최애의 포토"에서 만나보세요!
    > 
- 프로젝트 기간: 2024.10.08 ~ 2024.10.31

---

## **⚙ 기술 스택**

- Frontend: React, Redux, React-Query
- 배포: Netlify
- 공통 Tool: Git & Github, Discord, Notion

---

## **📌 프론트엔드 팀원별 구현 기능 상세**

### **김대건**

- 공통 컴포넌트
    - Nav
    - InputNormal
    - InputInvisible
    - ImgCardForSale
 
- Modal
    - 알림
    - 랜덤 포인트
    - 프로필
      
- 페이지
    - 회원가입
    - 로그인
    - 동작 성공&실패

### **정준호**

- 공통 컴포넌트
    - DescCardBuyer
    - DescCardSeller
    - DescCardDetail
    - SearchBar
    - TextArea

- Modal
    - 필터
    - 확인

- 페이지
    - 마켓플레이스
    - 마이갤러리
    - 나의 판매 포토카드

### **고종민**

- 공통 컴포넌트
    - ImgCardOriginal
    - ImgCardMy
    - ImgCardExchange
    - DropdownNormal
    - DropdownInput

- Modal
    - 포토카드 판매
    - 포토카드 교환

- 페이지
    - 마켓플레이스 판매 포토카드 상세
    - 포토카드 생성

## 📁 파일 구조

```

├─ build
├─ node_modules
├─ public
│  ├─ _redirects
│  └─ index.html
├─ src
│  ├─ api
│  │  ├─ axios.js
│  │  ├─ notifications.js
│  │  ├─ point.js
│  │  ├─ shop.js
│  │  └─ users.js
│  ├─ components
│  │  ├─ common
│  │  │  ├─ btn
│  │  │  ├─ dropdown_input
│  │  │  ├─ dropdown_normal
│  │  │  ├─ input_invisible
│  │  │  ├─ input_normal
│  │  │  ├─ quantity_control
│  │  │  ├─ randomPoint
│  │  │  ├─ search_bar
│  │  │  ├─ text_area
│  │  │  ├─ title
│  │  │  ├─ desc_card
│  │  │  ├─ img_card
│  │  │  └─ modals
│  │  │     ├─ confirm
│  │  │     ├─ filter_modal
│  │  │     ├─ loading
│  │  │     ├─ notice
│  │  │     ├─ photo_exchange
│  │  │     ├─ photo_modify
│  │  │     └─ profile
│  ├─ feature
│  │  ├─ buyer_detail
│  │  ├─ card_filter
│  │  ├─ card_render
│  │  ├─ card_state_control
│  │  ├─ create_photocard
│  │  ├─ header_action
│  │  ├─ login
│  │  ├─ my_card_total_state
│  │  ├─ nav
│  │  ├─ photo_exchange
│  │  ├─ photo_modify
│  │  ├─ randomPoint
│  │  ├─ seller_detail
│  │  └─ signup
│  ├─ hooks
│  │  ├─ card_render
│  │  └─ query
│  ├─ layout
│  │  ├─ nav
│  │  └─ nomal
│  ├─ page
│  │  ├─ buyer_detail
│  │  ├─ create_photocard
│  │  ├─ login
│  │  ├─ market
│  │  ├─ my_card_detail
│  │  ├─ my_gallery
│  │  ├─ my_shop
│  │  ├─ purchase_result
│  │  ├─ seller_detail
│  │  └─ signup
│  ├─ route
│  │  ├─ auth
│  │  ├─ notice
│  │  └─ randomPoint
│  ├─ redux
│  ├─ store
│  │  ├─ errorLoggerMiddleware.js
│  │  └─ store.js
│  ├─ styles
│  │  ├─ fonts
│  │  ├─ CardDetailStyle.module.css
│  │  ├─ CardListRenderStyle.module.css
│  │  ├─ CardPageStyle.module.css
│  │  ├─ CardStateControlStyle.module.css
│  │  ├─ CardStyle.module.css
│  │  ├─ DescCardFont.module.css
│  │  ├─ ModalCardStateControlStyle.module.css
│  │  ├─ ModalConfirmStyle.module.css
│  │  ├─ MyCardTotalStateStyle.module.css
│  │  └─ PageHeaderStyle.module.css
│  └─ util
│     └─ sliceValidation.js
├─ .env.development.local
├─ .env.production.local
├─ .gitignore
├─ config-overrides.js
├─ netlify.toml
├─ package-lock.json
└─ package.json
```
