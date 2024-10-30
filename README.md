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
      - 사용자가 받은 알림을 확인하고 관리할 수 있는 알림 모달 구현
      - 서버와 통신하여 알림 삭제 시 데이터베이스에서 해당 알림을 제거
    - 랜덤 포인트
      - 1시간마다 참여할 수 있는 랜덤 포인트 획득 이벤트 모달 구현
      - 이벤트 참여 시 서버와 통신하여 포인트를 적립하고 사용자 계정에 반영
    - 프로필
      - 로그인한 사용자의 프로필 정보를 표시하는 모달 구현
      - 사용자 닉네임, 보유 포인트 등의 정보를 표시하고 로그아웃 기능 제공
    - 로딩
      - 데이터 로딩 중에 사용자에게 로딩 상태를 표시하는 모달 구현
- 페이지
    - 회원가입
      - 이메일, 닉네임, 비밀번호 입력 및 비밀번호 확인 기능 구현
      - 입력된 정보에 대한 실시간 유효성 검사 및 피드백 제공
      - 인증 및 인가 구현: 회원가입 후 서버로부터 인증 정보를 받아 안전한 통신 가능
    - 로그인
      - 사용자의 이메일과 비밀번호를 입력받아 인증하는 기능 구현
      - 입력된 정보에 대한 유효성 검사 및 에러 처리 구현
      - 인증 구현: 로그인 성공 시 사용자에게 JWT 토큰을 발급받아 이후 요청에 인증 헤더로 포함하여 서버와 통신
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
      - 포토카드 목록에서 원하는 조건으로 필터링할 수 있는 모달 구현
      - 등급, 장르 등의 다양한 필터 옵션 제공하여 사용자 편의성 향상
      - 선택한 필터에 따라 포토카드의 개수 및 목록을 동적으로 업데이트
    - 확인
      - 중요한 작업 전에 사용자에게 확인을 요청하는 모달 구현
      - 작업 진행 여부를 사용자에게 묻고, 선택에 따라 작업을 수행하거나 취소

- 페이지
    - 마켓플레이스
      - 다양한 포토카드를 볼 수 있는 마켓플레이스 페이지 구현
      - 검색 및 등급, 장르, 판매 상태별 필터 기능 제공하여 원하는 포토카드를 쉽게 찾을 수 있음
      - 무한 스크롤 기능 구현으로 포토카드 목록을 스크롤할 때 자동으로 추가 로딩하여 사용자 경험 향상
    - 마이갤러리
      - 사용자가 보유한 포토카드 목록을 조회하고 관리할 수 있는 페이지 구현
      - 검색 및 등급, 장르별 필터 기능을 제공하여 판매 포토카드를 효율적으로 관리
    - 나의 판매 포토카드
      - 사용자가 판매 중인 포토카드 목록을 조회하고 관리할 수 있는 페이지 구현

### **고종민**

- 공통 컴포넌트
    - ImgCardOriginal
    - ImgCardMy
    - ImgCardExchange
    - DropdownNormal
    - DropdownInput

- Modal
    - 포토카드 수정
      - 판매자가 등록한 포토카드의 가격, 판매 수량, 교환 희망 정보를 수정할 수 있는 모달 구현
      - 수정된 내용을 입력하여 서버로 전송하고, 수정 후 최신 정보가 화면에 반영되도록 기능 구현
    - 포토카드 교환
      - 구매자가 자신의 포토카드를 선택하여 다른 사용자의 포토카드와 교환 요청을 할 수 있는 모달 구현
      - 교환 요청 시 교환 제시 내용을 입력하여 서버로 전송하는 기능 구현

- 페이지
    - 마켓플레이스 판매 포토카드 상세
      - 구매자용과 판매자용 두가지 버전의 상세 페이지 구현
      - 구매자와 판매자가 각자의 역할에 맞는 정보를 볼 수 있도록 설계
    - 포토카드 생성
      - 사용자가 포토카드의 상세 정보를 입력하고 이미지를 업로드하여 새로운 포토카드를 생성할 수 있는 페이지 구현
      - 리액트 쿼리의 useMutation 훅을 사용하여 서버에 폼 데이터를 전송하고 포토카드를 생성하는 API 호출을 처리

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
