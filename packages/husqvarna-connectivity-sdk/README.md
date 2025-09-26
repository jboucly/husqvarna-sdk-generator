## @jboucly/husqvarna-connectivity-sdk@1.0.0

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
npm install @jboucly/husqvarna-connectivity-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.connectivity.husqvarna.dev/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**devicesGet**](docs/DefaultApi.md#devicesget) | **GET** /devices | Returns list of device ids the user has access to
*DefaultApi* | [**devicesIdFullGet**](docs/DefaultApi.md#devicesidfullget) | **GET** /devices/{id}/full | Returns the full details of a specific device
*DefaultApi* | [**devicesIdGet**](docs/DefaultApi.md#devicesidget) | **GET** /devices/{id} | Returns the details of a specific device
*DefaultApi* | [**specificationsSpecificationIdGet**](docs/DefaultApi.md#specificationsspecificationidget) | **GET** /specifications/{specificationId} | Returns the details of a specific specification


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

