# wanted-pre-onboarding-challenge-fe-2

> 프리온보딩 프론트엔드 챌린지 (typescript) 2023.02

## 📌 챌린지 과제 가이드

> 요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 Interface로 설계하고 모델링하는 챌린지 과제입니다.
- 모든 요구사항은 선언을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.

## 📝 Requirements

### 필수 요구사항

> 아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```
