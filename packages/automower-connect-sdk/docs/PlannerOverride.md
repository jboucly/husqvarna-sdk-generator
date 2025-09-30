# PlannerOverride

The Planner has an override feature, which can be used to override the operation decided by the Calendar. There is room for one override at a time, and it occurs from now and for a duration of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Action:   * &#x60;NOT_ACTIVE&#x60; - Not active.   * &#x60;FORCE_PARK&#x60; - Force park until next start means that no more mowing will be done within the current task. Operation will be resumed at the start of the next task instead.   * &#x60;FORCE_MOW&#x60; - Force the mower to mow for the specified amount of time. When the time has elapsed, the override is removed and the Planner reverts to the Calendar instead.  | [default to undefined]

## Example

```typescript
import { PlannerOverride } from 'automower-connect-sdk';

const instance: PlannerOverride = {
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
