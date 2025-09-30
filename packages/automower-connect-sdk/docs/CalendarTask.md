# CalendarTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **number** | Start time expressed in minutes after midnight. | [default to undefined]
**duration** | **number** | Duration time expressed in minutes. | [default to undefined]
**monday** | **boolean** | Enabled on Mondays | [default to undefined]
**tuesday** | **boolean** | Enabled on Tuesdays | [default to undefined]
**wednesday** | **boolean** | Enabled on Wednesdays | [default to undefined]
**thursday** | **boolean** | Enabled on Thursdays | [default to undefined]
**friday** | **boolean** | Enabled on Fridays | [default to undefined]
**saturday** | **boolean** | Enabled on Saturdays | [default to undefined]
**sunday** | **boolean** | Enabled on Sundays | [default to undefined]

## Example

```typescript
import { CalendarTask } from 'automower-connect-sdk';

const instance: CalendarTask = {
    start,
    duration,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
