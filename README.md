<div align="center">
  <img src="https://developer.husqvarnagroup.cloud/assets/husqvarna-developer-logo-CxG7Npke.svg" alt="Logo" width=300"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/OpenAPI%20Generator-2.23.1-6BA539?logo=openapiinitiative&logoColor=white&style=for-the-badge" alt="OpenApi" />
</div>
<br />

# Husqvarna APIs SDK Generator (Unofficial)

This project provides a **TypeScript/JavaScript SDK** for the [Husqvarna Automower Connect API](https://developer.husqvarnagroup.cloud/).
It allows developers to easily interact with their Automower devices (status, battery, control, etc.) from Node.js or browser-based apps.

⚠️ **Disclaimer** ⚠️
This SDK is **not an official Husqvarna product**.
It is an open-source community project, built on top of the public API documented by Husqvarna. It's generated from the OpenAPI specification provided by Husqvarna with [OpenAPI Generator](https://openapi-generator.tech/).

Users of this SDK must :

- Create their own API key and OAuth2 credentials on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/).
- Follow the official [API Terms of Use](https://developer.husqvarnagroup.cloud/terms).

## Installation

You don't have to install all three, but if you use automower-connect-sdk or husqvarna-connectivity-sdk you have to install husqvarna-authentication-sdk to be able to generate or revoke a token.

You can install the SDK via npm | yarn | pnpm :

```bash
npm i automower-connect-sdk husqvarna-connectivity-sdk husqvarna-authentication-sdk
```

```bash
yarn add automower-connect-sdk husqvarna-connectivity-sdk husqvarna-authentication-sdk
```

```bash
pnpm add automower-connect-sdk husqvarna-connectivity-sdk husqvarna-authentication-sdk
```

## Usage

You can find examples of usage in the [src/index.ts](src/index.ts) file.

For documentation on `husqvarna-authentication-sdk`, see the [README](docs/husqvarna-authentication-sdk.md).
For documentation on `automower-connect-sdk`, see the [README](docs/automower-connect-sdk.md).
For documentation on `husqvarna-connectivity-sdk`, see the [README](docs/husqvarna-connectivity-sdk.md).

For more detailed documentation, please refer to the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Jboucly - 2025
