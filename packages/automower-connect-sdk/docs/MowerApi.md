# MowerApi

All URIs are relative to *https://api.amc.husqvarna.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mowersGet**](#mowersget) | **GET** /mowers | List data for all mowers linked to a user.|
|[**mowersIdGet**](#mowersidget) | **GET** /mowers/{id} | Get data for a mower linked to a user.|
|[**mowersIdMessagesGet**](#mowersidmessagesget) | **GET** /mowers/{id}/messages | Get last messages for a mower.|
|[**mowersIdStayOutZonesGet**](#mowersidstayoutzonesget) | **GET** /mowers/{id}/stayOutZones | Get all stay out zones for a mower linked to a user.|
|[**mowersIdWorkAreasGet**](#mowersidworkareasget) | **GET** /mowers/{id}/workAreas | Get all detailed work areas for a mower linked to a user.|
|[**mowersIdWorkAreasWorkAreaIdGet**](#mowersidworkareasworkareaidget) | **GET** /mowers/{id}/workAreas/{workAreaId} | Get detailed data for a work area for a mower linked to a user.|

# **mowersGet**
> JsonApiDataListDocument mowersGet()

List data for all mowers linked to the user associated with the access token.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

const { status, data } = await apiInstance.mowersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**JsonApiDataListDocument**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdGet**
> JsonApiDataDocument mowersIdGet()

Get data for a mower linked to the user associated with the access token.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocument**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. Empty if valid mower id but mower id could not be found |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdMessagesGet**
> JsonApiDataDocumentMessages mowersIdMessagesGet()

Get last occurred messages for a mower (max 50). Includes the position when the error occurred.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdMessagesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentMessages**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. Empty list if valid mower id but no messages could be be found |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdStayOutZonesGet**
> JsonApiDataDocumentStayOutZones mowersIdStayOutZonesGet()

Get all stay out zones for a mower linked to the user associated with the access token. Stay out zones are not available on EPOS mowers.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdStayOutZonesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataDocumentStayOutZones**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. Empty list if valid mower id but no stay out zones could be be found |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdWorkAreasGet**
> JsonApiDataListDocumentWorkAreas mowersIdWorkAreasGet()

Get all detailed work areas for a mower linked to the user associated with the access token.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)

const { status, data } = await apiInstance.mowersIdWorkAreasGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|


### Return type

**JsonApiDataListDocumentWorkAreas**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. Empty if valid mower id but mower id could not be found |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mowersIdWorkAreasWorkAreaIdGet**
> JsonApiDataDocumentWorkArea mowersIdWorkAreasWorkAreaIdGet()

Get detailed data for a work area for a mower linked to the user associated with the access token.

### Example

```typescript
import {
    MowerApi,
    Configuration
} from 'automower-connect-sdk';

const configuration = new Configuration();
const apiInstance = new MowerApi(configuration);

let id: string; //Identity of the mower. Can be obtain when listing mowers. (default to undefined)
let workAreaId: number; //Identity of the work area. (default to undefined)

const { status, data } = await apiInstance.mowersIdWorkAreasWorkAreaIdGet(
    id,
    workAreaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identity of the mower. Can be obtain when listing mowers. | defaults to undefined|
| **workAreaId** | [**number**] | Identity of the work area. | defaults to undefined|


### Return type

**JsonApiDataDocumentWorkArea**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [Token](../README.md#Token), [Provider](../README.md#Provider)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success, response body contains data. Empty if valid mower id but work area could not be found |  -  |
|**400** | Failure, bad request. |  -  |
|**401** | Failure, unauthorized request. |  -  |
|**403** | Failure, unauthorized request. |  -  |
|**404** | Failure, requested resource not found. |  -  |
|**500** | Error, unknown internal server error. |  -  |
|**503** | Error, unavailable internal server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

