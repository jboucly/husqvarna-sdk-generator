## automower-connect-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install automower-connect-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.amc.husqvarna.dev/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActionsApi* | [**mowersIdActionsPost**](docs/ActionsApi.md#mowersidactionspost) | **POST** /mowers/{id}/actions | Accepts actions to control a mower linked to a user.
*ActionsApi* | [**mowersIdCalendarPost**](docs/ActionsApi.md#mowersidcalendarpost) | **POST** /mowers/{id}/calendar | Update the calendar on the mower.
*ActionsApi* | [**mowersIdErrorsConfirmPost**](docs/ActionsApi.md#mowersiderrorsconfirmpost) | **POST** /mowers/{id}/errors/confirm | Confirm current error.
*ActionsApi* | [**mowersIdSettingsPost**](docs/ActionsApi.md#mowersidsettingspost) | **POST** /mowers/{id}/settings | Update the settings on the mower.
*ActionsApi* | [**mowersIdStatisticsResetCuttingBladeUsageTimePost**](docs/ActionsApi.md#mowersidstatisticsresetcuttingbladeusagetimepost) | **POST** /mowers/{id}/statistics/resetCuttingBladeUsageTime | Reset the cutting blade usage time.
*ActionsApi* | [**mowersIdStayOutZonesStayOutIdPatch**](docs/ActionsApi.md#mowersidstayoutzonesstayoutidpatch) | **PATCH** /mowers/{id}/stayOutZones/{stayOutId} | Enable or disable the stay-out zone.
*ActionsApi* | [**mowersIdWorkAreasWorkAreaIdCalendarPost**](docs/ActionsApi.md#mowersidworkareasworkareaidcalendarpost) | **POST** /mowers/{id}/workAreas/{workAreaId}/calendar | Update the calendar for a work area on the mower.
*ActionsApi* | [**mowersIdWorkAreasWorkAreaIdPatch**](docs/ActionsApi.md#mowersidworkareasworkareaidpatch) | **PATCH** /mowers/{id}/workAreas/{workAreaId} | Update the the work area on the mower.
*MowerApi* | [**mowersGet**](docs/MowerApi.md#mowersget) | **GET** /mowers | List data for all mowers linked to a user.
*MowerApi* | [**mowersIdGet**](docs/MowerApi.md#mowersidget) | **GET** /mowers/{id} | Get data for a mower linked to a user.
*MowerApi* | [**mowersIdMessagesGet**](docs/MowerApi.md#mowersidmessagesget) | **GET** /mowers/{id}/messages | Get last messages for a mower.
*MowerApi* | [**mowersIdStayOutZonesGet**](docs/MowerApi.md#mowersidstayoutzonesget) | **GET** /mowers/{id}/stayOutZones | Get all stay out zones for a mower linked to a user.
*MowerApi* | [**mowersIdWorkAreasGet**](docs/MowerApi.md#mowersidworkareasget) | **GET** /mowers/{id}/workAreas | Get all detailed work areas for a mower linked to a user.
*MowerApi* | [**mowersIdWorkAreasWorkAreaIdGet**](docs/MowerApi.md#mowersidworkareasworkareaidget) | **GET** /mowers/{id}/workAreas/{workAreaId} | Get detailed data for a work area for a mower linked to a user.


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

