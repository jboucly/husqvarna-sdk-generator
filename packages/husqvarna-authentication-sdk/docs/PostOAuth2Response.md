# PostOAuth2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** | Access token (JWT) with information about the current logged in user. | [optional] [default to undefined]
**scope** | **string** | Scope | [optional] [default to undefined]
**expiresIn** | **number** | Timestamp expires in seconds | [optional] [default to undefined]
**refreshToken** | **string** | Refresh token | [optional] [default to undefined]
**provider** | **string** | Token provider | [optional] [default to undefined]
**userId** | **string** | User id | [optional] [default to undefined]
**tokenType** | **string** | Bearer | [optional] [default to undefined]

## Example

```typescript
import { PostOAuth2Response } from '@jboucly/husqvarna-authentication-sdk';

const instance: PostOAuth2Response = {
    accessToken,
    scope,
    expiresIn,
    refreshToken,
    provider,
    userId,
    tokenType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
