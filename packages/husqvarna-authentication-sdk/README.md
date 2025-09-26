## @jboucly/husqvarna-authentication-sdk@1.0.0

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
npm install @jboucly/husqvarna-authentication-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.authentication.husqvarnagroup.dev/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OAuth2Api* | [**oauth2RevokePost**](docs/OAuth2Api.md#oauth2revokepost) | **POST** /oauth2/revoke | OAuth2 logout
*OAuth2Api* | [**oauth2TokenPost**](docs/OAuth2Api.md#oauth2tokenpost) | **POST** /oauth2/token | OAuth2 login


### Documentation For Models

 - [PostOAuth2Response](docs/PostOAuth2Response.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="APIKeyHeader"></a>
### APIKeyHeader

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

<a id="AuthorizationHeader"></a>
### AuthorizationHeader

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

