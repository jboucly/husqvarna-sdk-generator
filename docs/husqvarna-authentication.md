<div align="center">
  <img src="https://developer.husqvarnagroup.cloud/assets/husqvarna-developer-logo-CxG7Npke.svg" alt="Logo" width=300"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/OpenAPI%20Generator-2.23.1-6BA539?logo=openapiinitiative&logoColor=white&style=for-the-badge" alt="OpenApi" />
</div>
<br />

## husqvarna-authentication-sdk (Unofficial)

This package provides a **TypeScript/JavaScript SDK** for the [Husqvarna Authentication API](https://developer.husqvarnagroup.cloud/apis/authentication-api).

⚠️ **Disclaimer** ⚠️
This SDK is **not an official Husqvarna product**.
It is an open-source community project, built on top of the public API documented by Husqvarna. It's generated from the OpenAPI specification provided by Husqvarna with [OpenAPI Generator](https://openapi-generator.tech/).

Users of this SDK must :

- Create their own API key and OAuth2 credentials on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/).
- Follow the official [API Terms of Use](https://developer.husqvarnagroup.cloud/terms).

This package is use

### Installation

To install the package, run one of the following commands in your project folder :

NPM :

```bash
npm install husqvarna-authentication-sdk
```

PNPM :

```bash
pnpm add husqvarna-authentication-sdk
```

Yarn :

```bash
yarn add husqvarna-authentication-sdk
```

### Usage

Import the package in your TypeScript or JavaScript code :

```typescript
import { OAuth2Api, Oauth2TokenPostGrantTypeEnum } from 'husqvarna-authentication-sdk';

const apiAuth = new OAuth2Api();

const tokenReponse = await apiAuth.oauth2TokenPost({
    clientId: <Application ID>,
    clientSecret: <Application Secret>,
    grantType: Oauth2TokenPostGrantTypeEnum.CLIENT_CREDENTIALS
});

console.info(`Access Token : ${tokenReponse.data.accessToken}`);
```
