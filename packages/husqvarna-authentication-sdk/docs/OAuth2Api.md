# OAuth2Api

All URIs are relative to *https://api.authentication.husqvarnagroup.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**oauth2RevokePost**](#oauth2revokepost) | **POST** /oauth2/revoke | OAuth2 logout|
|[**oauth2TokenPost**](#oauth2tokenpost) | **POST** /oauth2/token | OAuth2 login|

# **oauth2RevokePost**
> oauth2RevokePost()

Revoke an access token and the associated refresh tokens. 

### Example

```typescript
import {
    OAuth2Api,
    Configuration
} from 'husqvarna-authentication-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth2Api(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.oauth2RevokePost(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2TokenPost**
> PostOAuth2Response oauth2TokenPost()

Create an access_token. 

### Example

```typescript
import {
    OAuth2Api,
    Configuration
} from 'husqvarna-authentication-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth2Api(configuration);

let grantType: string; //The grant type to use (default to undefined)
let clientId: string; //used for all oauth2 flows (default to undefined)
let clientSecret: string; //used with the client_credentials and authorization_code flow (optional) (default to undefined)
let code: string; //used in the authorization_code flow (optional) (default to undefined)
let scope: string; //used by all flows to specify the needed scopes. (optional) (default to undefined)
let redirectUri: string; //used in the authorization_code flow (optional) (default to undefined)
let refreshToken: string; //used with the refresh_token grant to get a new access_token (optional) (default to undefined)

const { status, data } = await apiInstance.oauth2TokenPost(
    grantType,
    clientId,
    clientSecret,
    code,
    scope,
    redirectUri,
    refreshToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantType** | [**string**]**Array<&#39;authorization_code&#39; &#124; &#39;client_credentials&#39; &#124; &#39;refresh_token&#39;>** | The grant type to use | defaults to undefined|
| **clientId** | [**string**] | used for all oauth2 flows | defaults to undefined|
| **clientSecret** | [**string**] | used with the client_credentials and authorization_code flow | (optional) defaults to undefined|
| **code** | [**string**] | used in the authorization_code flow | (optional) defaults to undefined|
| **scope** | [**string**] | used by all flows to specify the needed scopes. | (optional) defaults to undefined|
| **redirectUri** | [**string**] | used in the authorization_code flow | (optional) defaults to undefined|
| **refreshToken** | [**string**] | used with the refresh_token grant to get a new access_token | (optional) defaults to undefined|


### Return type

**PostOAuth2Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Token info |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

