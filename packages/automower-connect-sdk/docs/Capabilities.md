# Capabilities

Information about what capabilities the Automower® has

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canConfirmError** | **boolean** | If the Automower® supports the command confirm error. The error also needs to be confirmable. | [default to undefined]
**headlights** | **boolean** | If the Automower® supports headlights | [default to undefined]
**position** | **boolean** | If the Automower® supports GPS position. If false no positions are available. | [default to undefined]
**stayOutZones** | **boolean** | If the Automower® supports stay-out zones | [default to undefined]
**workAreas** | **boolean** | If the Automower® supports work areas | [default to undefined]

## Example

```typescript
import { Capabilities } from '@jboucly/automower-connect-sdk';

const instance: Capabilities = {
    canConfirmError,
    headlights,
    position,
    stayOutZones,
    workAreas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
