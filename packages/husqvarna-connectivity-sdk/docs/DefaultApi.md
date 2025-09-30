# DefaultApi

All URIs are relative to *https://api.connectivity.husqvarna.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**devicesGet**](#devicesget) | **GET** /devices | Returns list of device ids the user has access to|
|[**devicesIdFullGet**](#devicesidfullget) | **GET** /devices/{id}/full | Returns the full details of a specific device|
|[**devicesIdGet**](#devicesidget) | **GET** /devices/{id} | Returns the details of a specific device|
|[**specificationsSpecificationIdGet**](#specificationsspecificationidget) | **GET** /specifications/{specificationId} | Returns the details of a specific specification|

# **devicesGet**
> DevicesResponse devicesGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'husqvarna-connectivity-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.devicesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DevicesResponse**

### Authorization

[Authorization](../README.md#Authorization), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Failure, user could not be authenticated. X-Api-Key header or Bearer Token missing or invalid. |  -  |
|**404** | Failure, not found. |  -  |
|**500** | Failure, internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesIdFullGet**
> FullDeviceResponse devicesIdFullGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'husqvarna-connectivity-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.devicesIdFullGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FullDeviceResponse**

### Authorization

[Authorization](../README.md#Authorization), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Failure, user could not be authenticated. X-Api-Key header or Bearer Token missing or invalid. |  -  |
|**404** | Failure, device not found. |  -  |
|**500** | Failure, internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesIdGet**
> DeviceResponse devicesIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'husqvarna-connectivity-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.devicesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DeviceResponse**

### Authorization

[Authorization](../README.md#Authorization), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Failure, user could not be authenticated. X-Api-Key header or Bearer Token missing or invalid. |  -  |
|**404** | Failure, device not found. |  -  |
|**500** | Failure, internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **specificationsSpecificationIdGet**
> SpecificationResponse specificationsSpecificationIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'husqvarna-connectivity-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let specificationId: string; // (default to undefined)

const { status, data } = await apiInstance.specificationsSpecificationIdGet(
    specificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **specificationId** | [**string**] |  | defaults to undefined|


### Return type

**SpecificationResponse**

### Authorization

[Authorization](../README.md#Authorization), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Failure, user could not be authenticated. X-Api-Key header or Bearer Token missing or invalid. |  -  |
|**404** | Failure, specification not found. |  -  |
|**500** | Failure, internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

