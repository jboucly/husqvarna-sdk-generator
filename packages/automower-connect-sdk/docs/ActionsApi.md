# ActionsApi

All URIs are relative to *https://api.amc.husqvarna.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mowersIdActionsPost**](#mowersidactionspost) | **POST** /mowers/{id}/actions | Accepts actions to control a mower linked to a user.|
|[**mowersIdCalendarPost**](#mowersidcalendarpost) | **POST** /mowers/{id}/calendar | Update the calendar on the mower.|
|[**mowersIdErrorsConfirmPost**](#mowersiderrorsconfirmpost) | **POST** /mowers/{id}/errors/confirm | Confirm current error.|
|[**mowersIdSettingsPost**](#mowersidsettingspost) | **POST** /mowers/{id}/settings | Update the settings on the mower.|
|[**mowersIdStatisticsResetCuttingBladeUsageTimePost**](#mowersidstatisticsresetcuttingbladeusagetimepost) | **POST** /mowers/{id}/statistics/resetCuttingBladeUsageTime | Reset the cutting blade usage time.|
|[**mowersIdStayOutZonesStayOutIdPatch**](#mowersidstayoutzonesstayoutidpatch) | **PATCH** /mowers/{id}/stayOutZones/{stayOutId} | Enable or disable the stay-out zone.|
|[**mowersIdWorkAreasWorkAreaIdCalendarPost**](#mowersidworkareasworkareaidcalendarpost) | **POST** /mowers/{id}/workAreas/{workAreaId}/calendar | Update the calendar for a work area on the mower.|
|[**mowersIdWorkAreasWorkAreaIdPatch**](#mowersidworkareasworkareaidpatch) | **PATCH** /mowers/{id}/workAreas/{workAreaId} | Update the the work area on the mower.|

# **mowersIdActionsPost**
> JsonApiDataDocumentCommandResult mowersIdActionsPost(mowersIdActionsPostRequest)

Accepts actions to control a mower linked to a user.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdActionsPostRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let mowersIdActionsPostRequest: MowersIdActionsPostRequest; //A single action

const { status, data } = await apiInstance.mowersIdActionsPost(
    id,
    mowersIdActionsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdActionsPostRequest** | **MowersIdActionsPostRequest**| A single action | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdCalendarPost**
> JsonApiDataDocumentCommandResult mowersIdCalendarPost(mowersIdCalendarPostRequest)

Update the calendar on the mower. The data sent in will replace the calendar on the mower. You need to include all tasks both new and old. To delete a task you just skip the task in the list.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdCalendarPostRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let mowersIdCalendarPostRequest: MowersIdCalendarPostRequest; //A calendar with all tasks

const { status, data } = await apiInstance.mowersIdCalendarPost(
    id,
    mowersIdCalendarPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdCalendarPostRequest** | **MowersIdCalendarPostRequest**| A calendar with all tasks | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdErrorsConfirmPost**
> JsonApiDataDocumentCommandResult mowersIdErrorsConfirmPost()

Confirm current non fatal error on the mower. Same function that is available in the Automower Connect app. Will only work if current error is considered confirmable by the mower. Available for models 405X, 415X, 435X AWD and 535 AWD. Also available on all Ceora, EPOS and NERA models.

### Example

```typescript
import {
    ActionsApi,
    Configuration
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdErrorsConfirmPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdSettingsPost**
> JsonApiDataDocumentListCommandResult mowersIdSettingsPost(mowersIdSettingsPostRequest)

Update the settings on the mower. Available settings can be found when getting the mower data. Its possible to set cutting height or/and headlight.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdSettingsPostRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let mowersIdSettingsPostRequest: MowersIdSettingsPostRequest; //Settings to update

const { status, data } = await apiInstance.mowersIdSettingsPost(
    id,
    mowersIdSettingsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdSettingsPostRequest** | **MowersIdSettingsPostRequest**| Settings to update | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentListCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdStatisticsResetCuttingBladeUsageTimePost**
> JsonApiDataDocumentCommandResult mowersIdStatisticsResetCuttingBladeUsageTimePost()

Reset the cutting blade usage time. Same function that is available in the Automower Connect app. The statistics value cuttingBladeUsageTime will be reset. Can be used when cutting blades are changed on the Automower to know when its time to the blades next time.

### Example

```typescript
import {
    ActionsApi,
    Configuration
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdStatisticsResetCuttingBladeUsageTimePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdStayOutZonesStayOutIdPatch**
> JsonApiDataDocumentCommandResult mowersIdStayOutZonesStayOutIdPatch(mowersIdStayOutZonesStayOutIdPatchRequest)

Enable or disable the stay-out zone.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdStayOutZonesStayOutIdPatchRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let stayOutId: string; //Identity of the stay-out zone. (default to undefined)
let mowersIdStayOutZonesStayOutIdPatchRequest: MowersIdStayOutZonesStayOutIdPatchRequest; //Body for stay-out zone to enable or disable

const { status, data } = await apiInstance.mowersIdStayOutZonesStayOutIdPatch(
    id,
    stayOutId,
    mowersIdStayOutZonesStayOutIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdStayOutZonesStayOutIdPatchRequest** | **MowersIdStayOutZonesStayOutIdPatchRequest**| Body for stay-out zone to enable or disable | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|
| **stayOutId** | [**string**] | Identity of the stay-out zone. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdWorkAreasWorkAreaIdCalendarPost**
> JsonApiDataDocumentCommandResult mowersIdWorkAreasWorkAreaIdCalendarPost(mowersIdWorkAreasWorkAreaIdCalendarPostRequest)

Update the calendar for a work area on the mower. This will replace all tasks for the work area.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdWorkAreasWorkAreaIdCalendarPostRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let workAreaId: number; //Identity of the work area. (default to undefined)
let mowersIdWorkAreasWorkAreaIdCalendarPostRequest: MowersIdWorkAreasWorkAreaIdCalendarPostRequest; //A calendar with all tasks for a work area

const { status, data } = await apiInstance.mowersIdWorkAreasWorkAreaIdCalendarPost(
    id,
    workAreaId,
    mowersIdWorkAreasWorkAreaIdCalendarPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdWorkAreasWorkAreaIdCalendarPostRequest** | **MowersIdWorkAreasWorkAreaIdCalendarPostRequest**| A calendar with all tasks for a work area | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|
| **workAreaId** | [**number**] | Identity of the work area. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdWorkAreasWorkAreaIdPatch**
> JsonApiDataDocumentCommandResult mowersIdWorkAreasWorkAreaIdPatch(mowersIdWorkAreasWorkAreaIdPatchRequest)

Update the work area on the mower. This will update cutting height on the work area.

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    MowersIdWorkAreasWorkAreaIdPatchRequest
} from '@jboucly/automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let workAreaId: number; //Identity of the work area. (default to undefined)
let mowersIdWorkAreasWorkAreaIdPatchRequest: MowersIdWorkAreasWorkAreaIdPatchRequest; //Body for work area to update cutting height

const { status, data } = await apiInstance.mowersIdWorkAreasWorkAreaIdPatch(
    id,
    workAreaId,
    mowersIdWorkAreasWorkAreaIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mowersIdWorkAreasWorkAreaIdPatchRequest** | **MowersIdWorkAreasWorkAreaIdPatchRequest**| Body for work area to update cutting height | |
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|
| **workAreaId** | [**number**] | Identity of the work area. | defaults to undefined|


### Return type

**JsonApiDataDocumentCommandResult**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The action was accepted and is being processed, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**415** | Media not supported. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

