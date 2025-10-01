<div align="center">
  <img src="https://developer.husqvarnagroup.cloud/assets/husqvarna-developer-logo-CxG7Npke.svg" alt="Logo" width=300"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/OpenAPI%20Generator-2.23.1-6BA539?logo=openapiinitiative&logoColor=white&style=for-the-badge" alt="OpenApi" />
</div>
<br />

## husqvarna-connectivity-sdk (Unofficial)

This package provides a **TypeScript/JavaScript SDK** for the [Husqvarna Connectivity API](https://developer.husqvarnagroup.cloud/apis/connectivity-api).

⚠️ **Disclaimer** ⚠️
This SDK is **not an official Husqvarna product**.
It is an open-source community project, built on top of the public API documented by Husqvarna. It's generated from the OpenAPI specification provided by Husqvarna with [OpenAPI Generator](https://openapi-generator.tech/).

Users of this SDK must :

- Create their own API key and OAuth2 credentials on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/).
- Follow the official [API Terms of Use](https://developer.husqvarnagroup.cloud/terms).

This package is use

## Requirements

You need to install [husqvarna-authentication-sdk](https://www.npmjs.com/package/husqvarna-authentication-sdk) for authentication and getting an access token.

### Installation

To install the package, run one of the following commands in your project folder :

NPM :

```bash
npm install husqvarna-connectivity-sdk
```

PNPM :

```bash
pnpm add husqvarna-connectivity-sdk
```

Yarn :

```bash
yarn add husqvarna-connectivity-sdk
```

### Usage

Import the package in your TypeScript or JavaScript code :

```typescript
import { DefaultApi as HusqvarnaConnectivityApi } from 'husqvarna-connectivity-sdk';

const apiHusqvarna = new HusqvarnaConnectivityApi(
    new Configuration({,
        apiKey: <Your API Key>,
        baseOptions: {
            headers: {
                Authorization: `Bearer ${<Access Token generated with husqvarna-authentication-sdk package>}`,
            }
        }
    })
);

const mowerInfo = await apiHusqvarna.devicesIdFullGet({
    id: '<Your Mower ID getted from mowersGet endpoint of automower-connect-sdk package>',
});

console.info('Mower Info :', mowerInfo.data);
```

## Documentation

The full API documentation is available on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/apis/connectivity-api).

### Documentation for API Endpoints

All URIs are relative to *https://api.connectivity.husqvarna.dev/v1*

| Class        | Method                                                                                      | HTTP request                              | Description                                       |
| ------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| _DefaultApi_ | [**devicesGet**](docs/DefaultApi.md#devicesget)                                             | **GET** /devices                          | Returns list of device ids the user has access to |
| _DefaultApi_ | [**devicesIdFullGet**](docs/DefaultApi.md#devicesidfullget)                                 | **GET** /devices/{id}/full                | Returns the full details of a specific device     |
| _DefaultApi_ | [**devicesIdGet**](docs/DefaultApi.md#devicesidget)                                         | **GET** /devices/{id}                     | Returns the details of a specific device          |
| _DefaultApi_ | [**specificationsSpecificationIdGet**](docs/DefaultApi.md#specificationsspecificationidget) | **GET** /specifications/{specificationId} | Returns the details of a specific specification   |

### Documentation For Models

- [DeviceAttributes](docs/DeviceAttributes.md)
- [DeviceAttributesAnyOf](docs/DeviceAttributesAnyOf.md)
- [DeviceAttributesAnyOf1](docs/DeviceAttributesAnyOf1.md)
- [DeviceAttributesAnyOf2](docs/DeviceAttributesAnyOf2.md)
- [DeviceAttributesAnyOf3](docs/DeviceAttributesAnyOf3.md)
- [DeviceResponse](docs/DeviceResponse.md)
- [DeviceResponseData](docs/DeviceResponseData.md)
- [DeviceResponseDataAttributes](docs/DeviceResponseDataAttributes.md)
- [DeviceResponseDataAttributesUdm](docs/DeviceResponseDataAttributesUdm.md)
- [DevicesResponse](docs/DevicesResponse.md)
- [DevicesResponseDataInner](docs/DevicesResponseDataInner.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [FullDeviceResponse](docs/FullDeviceResponse.md)
- [FullDeviceResponseData](docs/FullDeviceResponseData.md)
- [JsonApiErrorObject](docs/JsonApiErrorObject.md)
- [SpecificationResponse](docs/SpecificationResponse.md)
- [SpecificationResponseData](docs/SpecificationResponseData.md)

<a id="documentation-for-authorization"></a>

## Documentation For Authorization

Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

<a id="Authorization"></a>

### Authorization

- **Type**: Bearer authentication
