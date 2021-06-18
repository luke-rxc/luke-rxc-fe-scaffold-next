# FE Scaffold React

## scaffold

### next 버전의 scaffold 구조

```bash
├── configs
│
├── src
    ├── features
    │   ├── apis
    │   ├── components
    │   ├── constants
    │   ├── containers
    │   ├── hooks
    │   ├── models
    │   ├── schemas
    │   ├── services
    │   └── utils
    │
    ├── apis
    ├── components
    ├── constants
    ├── containers
    ├── hooks
    ├── models
    ├── schemas
    ├── services
    ├── utils
    ├── pages
    ├── redux
    ├── styles
    ├── types
    ├── index.tsx
    └── App.tsx
```

## 정적배포

### 실행

```
# build & export
$ yarn run export

# build & export & S3 업로드
# 현재는 개인 aws S3로 업로드 되도록 설정됨
$ yarn run upload
```

## Serverless next.js

### 설치

```
$ yarn add -D serverless
```

### 설정

root 폴더에 serverless.yml 파일 추가

```
# serverless.yml

rxcAppNext:
  component: '@sls-next/serverless-component@1.18.0'
```

S3, lambda 설정등 고정된 서버배포를 위한 설정가능,
cloudfront의 경우 초기 설정시 제외하고 배포

```
# serverless.yml

rxcAppNext:
  component: '@sls-next/serverless-component@1.18.0'
  inputs:
    bucketName: 'rxc-front-next-severless-s3'
    bucketRegion: 'ap-northeast-2'
    cloudfront:
      distributionId: 'E32285V9GMN1ZY'
    name:
      defaultLambda: 'rxc-front-next-severless-default-lambda'
      apiLambda: 'rxc-front-next-severless-api-lambda'

```

### 배포

```
$ yarn run deploy
```
