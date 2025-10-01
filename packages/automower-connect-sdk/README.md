<div align="center">
  <img src="https://developer.husqvarnagroup.cloud/assets/husqvarna-developer-logo-CxG7Npke.svg" alt="Logo" width=300"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/OpenAPI%20Generator-2.23.1-6BA539?logo=openapiinitiative&logoColor=white&style=for-the-badge" alt="OpenApi" />
</div>
<br />

## automower-connect-sdk (Unofficial)

This package provides a **TypeScript/JavaScript SDK** for the [Husqvarna Automower Connect API](https://developer.husqvarnagroup.cloud/apis/automower-connect-api).

⚠️ **Disclaimer** ⚠️
This SDK is **not an official Husqvarna product**.
It is an open-source community project, built on top of the public API documented by Husqvarna. It's generated from the OpenAPI specification provided by Husqvarna with [OpenAPI Generator](https://openapi-generator.tech/).

Users of this SDK must :

- Create their own API key and OAuth2 credentials on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/).
- Follow the official [API Terms of Use](https://developer.husqvarnagroup.cloud/terms).

## Requirements

You need to install [husqvarna-authentication-sdk](https://www.npmjs.com/package/husqvarna-authentication-sdk) for authentication and getting an access token.

### Installation

To install the package, run one of the following commands in your project folder :

NPM :

```bash
npm install automower-connect-sdk
```

PNPM :

```bash
pnpm add automower-connect-sdk
```

Yarn :

```bash
yarn add automower-connect-sdk
```

### Usage

Import the package in your TypeScript or JavaScript code :

```typescript
import { Configuration, MowerApi } from 'automower-connect-sdk';

const apiAuth = new MowerApi();
const apiMower = new MowerApi(
    new Configuration({
        apiKey: <Your API Key>,
        baseOptions: {
            headers: {
                'Authorization-Provider': 'husqvarna',
                Authorization: `Bearer ${<Access Token generated with husqvarna-authentication-sdk package>}`
            }
        }
    })
);

const mowers = await apiMower.mowersGet();
const mowerId = mowers.data?.data?.at(0)?.id;
console.info('Mower ID :', mowerId);

if (mowerId) {
    const mower = await apiMower.mowersIdGet({
        id: mowerId
    });

    console.info('State of the mower :', mower.data.data?.attributes?.mower.state);
}
```

## Documentation

The full API documentation is available on the [Husqvarna Developer Portal](https://developer.husqvarnagroup.cloud/apis/automower-connect-api).

### Documentation for API Endpoints

All URIs are relative to *https://api.amc.husqvarna.dev/v1*

| Class        | Method                                                                                                                      | HTTP request                                                | Description                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| _ActionsApi_ | [**mowersIdActionsPost**](docs/ActionsApi.md#mowersidactionspost)                                                           | **POST** /mowers/{id}/actions                               | Accepts actions to control a mower linked to a user.            |
| _ActionsApi_ | [**mowersIdCalendarPost**](docs/ActionsApi.md#mowersidcalendarpost)                                                         | **POST** /mowers/{id}/calendar                              | Update the calendar on the mower.                               |
| _ActionsApi_ | [**mowersIdErrorsConfirmPost**](docs/ActionsApi.md#mowersiderrorsconfirmpost)                                               | **POST** /mowers/{id}/errors/confirm                        | Confirm current error.                                          |
| _ActionsApi_ | [**mowersIdSettingsPost**](docs/ActionsApi.md#mowersidsettingspost)                                                         | **POST** /mowers/{id}/settings                              | Update the settings on the mower.                               |
| _ActionsApi_ | [**mowersIdStatisticsResetCuttingBladeUsageTimePost**](docs/ActionsApi.md#mowersidstatisticsresetcuttingbladeusagetimepost) | **POST** /mowers/{id}/statistics/resetCuttingBladeUsageTime | Reset the cutting blade usage time.                             |
| _ActionsApi_ | [**mowersIdStayOutZonesStayOutIdPatch**](docs/ActionsApi.md#mowersidstayoutzonesstayoutidpatch)                             | **PATCH** /mowers/{id}/stayOutZones/{stayOutId}             | Enable or disable the stay-out zone.                            |
| _ActionsApi_ | [**mowersIdWorkAreasWorkAreaIdCalendarPost**](docs/ActionsApi.md#mowersidworkareasworkareaidcalendarpost)                   | **POST** /mowers/{id}/workAreas/{workAreaId}/calendar       | Update the calendar for a work area on the mower.               |
| _ActionsApi_ | [**mowersIdWorkAreasWorkAreaIdPatch**](docs/ActionsApi.md#mowersidworkareasworkareaidpatch)                                 | **PATCH** /mowers/{id}/workAreas/{workAreaId}               | Update the the work area on the mower.                          |
| _MowerApi_   | [**mowersGet**](docs/MowerApi.md#mowersget)                                                                                 | **GET** /mowers                                             | List data for all mowers linked to a user.                      |
| _MowerApi_   | [**mowersIdGet**](docs/MowerApi.md#mowersidget)                                                                             | **GET** /mowers/{id}                                        | Get data for a mower linked to a user.                          |
| _MowerApi_   | [**mowersIdMessagesGet**](docs/MowerApi.md#mowersidmessagesget)                                                             | **GET** /mowers/{id}/messages                               | Get last messages for a mower.                                  |
| _MowerApi_   | [**mowersIdStayOutZonesGet**](docs/MowerApi.md#mowersidstayoutzonesget)                                                     | **GET** /mowers/{id}/stayOutZones                           | Get all stay out zones for a mower linked to a user.            |
| _MowerApi_   | [**mowersIdWorkAreasGet**](docs/MowerApi.md#mowersidworkareasget)                                                           | **GET** /mowers/{id}/workAreas                              | Get all detailed work areas for a mower linked to a user.       |
| _MowerApi_   | [**mowersIdWorkAreasWorkAreaIdGet**](docs/MowerApi.md#mowersidworkareasworkareaidget)                                       | **GET** /mowers/{id}/workAreas/{workAreaId}                 | Get detailed data for a work area for a mower linked to a user. |

### Documentation For Models

- [Battery](docs/Battery.md)
- [Calendar](docs/Calendar.md)
- [CalendarTask](docs/CalendarTask.md)
- [CalendarTaskWorkArea](docs/CalendarTaskWorkArea.md)
- [CalendarWorkArea](docs/CalendarWorkArea.md)
- [Capabilities](docs/Capabilities.md)
- [CuttingHeight](docs/CuttingHeight.md)
- [DurationAttributes](docs/DurationAttributes.md)
- [Headlight](docs/Headlight.md)
- [HeadlightHeadlight](docs/HeadlightHeadlight.md)
- [JsonApiAction](docs/JsonApiAction.md)
- [JsonApiData](docs/JsonApiData.md)
- [JsonApiDataCommandResult](docs/JsonApiDataCommandResult.md)
- [JsonApiDataDocument](docs/JsonApiDataDocument.md)
- [JsonApiDataDocumentCommandResult](docs/JsonApiDataDocumentCommandResult.md)
- [JsonApiDataDocumentListCommandResult](docs/JsonApiDataDocumentListCommandResult.md)
- [JsonApiDataDocumentMessages](docs/JsonApiDataDocumentMessages.md)
- [JsonApiDataDocumentStayOutZones](docs/JsonApiDataDocumentStayOutZones.md)
- [JsonApiDataDocumentWorkArea](docs/JsonApiDataDocumentWorkArea.md)
- [JsonApiDataListDocument](docs/JsonApiDataListDocument.md)
- [JsonApiDataListDocumentWorkAreas](docs/JsonApiDataListDocumentWorkAreas.md)
- [JsonApiDataMessages](docs/JsonApiDataMessages.md)
- [JsonApiDataStayOutZones](docs/JsonApiDataStayOutZones.md)
- [JsonApiDataWorkArea](docs/JsonApiDataWorkArea.md)
- [JsonApiError](docs/JsonApiError.md)
- [JsonApiErrorDocument](docs/JsonApiErrorDocument.md)
- [Message](docs/Message.md)
- [Messages](docs/Messages.md)
- [Metadata](docs/Metadata.md)
- [MowerApp](docs/MowerApp.md)
- [MowerData](docs/MowerData.md)
- [MowersIdActionsPostRequest](docs/MowersIdActionsPostRequest.md)
- [MowersIdActionsPostRequestData](docs/MowersIdActionsPostRequestData.md)
- [MowersIdCalendarPostRequest](docs/MowersIdCalendarPostRequest.md)
- [MowersIdCalendarPostRequestData](docs/MowersIdCalendarPostRequestData.md)
- [MowersIdCalendarPostRequestDataAttributes](docs/MowersIdCalendarPostRequestDataAttributes.md)
- [MowersIdSettingsPostRequest](docs/MowersIdSettingsPostRequest.md)
- [MowersIdSettingsPostRequestData](docs/MowersIdSettingsPostRequestData.md)
- [MowersIdSettingsPostRequestDataAttributes](docs/MowersIdSettingsPostRequestDataAttributes.md)
- [MowersIdStayOutZonesStayOutIdPatchRequest](docs/MowersIdStayOutZonesStayOutIdPatchRequest.md)
- [MowersIdStayOutZonesStayOutIdPatchRequestData](docs/MowersIdStayOutZonesStayOutIdPatchRequestData.md)
- [MowersIdStayOutZonesStayOutIdPatchRequestDataAttributes](docs/MowersIdStayOutZonesStayOutIdPatchRequestDataAttributes.md)
- [MowersIdWorkAreasWorkAreaIdCalendarPostRequest](docs/MowersIdWorkAreasWorkAreaIdCalendarPostRequest.md)
- [MowersIdWorkAreasWorkAreaIdCalendarPostRequestData](docs/MowersIdWorkAreasWorkAreaIdCalendarPostRequestData.md)
- [MowersIdWorkAreasWorkAreaIdCalendarPostRequestDataAttributes](docs/MowersIdWorkAreasWorkAreaIdCalendarPostRequestDataAttributes.md)
- [MowersIdWorkAreasWorkAreaIdPatchRequest](docs/MowersIdWorkAreasWorkAreaIdPatchRequest.md)
- [MowersIdWorkAreasWorkAreaIdPatchRequestData](docs/MowersIdWorkAreasWorkAreaIdPatchRequestData.md)
- [MowersIdWorkAreasWorkAreaIdPatchRequestDataAttributes](docs/MowersIdWorkAreasWorkAreaIdPatchRequestDataAttributes.md)
- [Park](docs/Park.md)
- [ParkUntilFurtherNotice](docs/ParkUntilFurtherNotice.md)
- [ParkUntilNextSchedule](docs/ParkUntilNextSchedule.md)
- [Pause](docs/Pause.md)
- [Planner](docs/Planner.md)
- [PlannerOverride](docs/PlannerOverride.md)
- [Position](docs/Position.md)
- [ResumeSchedule](docs/ResumeSchedule.md)
- [Settings](docs/Settings.md)
- [Start](docs/Start.md)
- [StartInWorkArea](docs/StartInWorkArea.md)
- [Statistics](docs/Statistics.md)
- [StayOutZone](docs/StayOutZone.md)
- [StayOutZones](docs/StayOutZones.md)
- [System](docs/System.md)
- [Timer](docs/Timer.md)
- [WorkArea](docs/WorkArea.md)
- [WorkAreaAttributes](docs/WorkAreaAttributes.md)
- [WorkAreaData](docs/WorkAreaData.md)

<a id="documentation-for-authorization"></a>

## Documentation For Authorization

Authentication schemes defined for the API:
<a id="APIKeyHeader"></a>

### APIKeyHeader

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

<a id="Token"></a>

### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

<a id="Provider"></a>

### Provider

- **Type**: API key
- **API key parameter name**: Authorization-Provider
- **Location**: HTTP header
