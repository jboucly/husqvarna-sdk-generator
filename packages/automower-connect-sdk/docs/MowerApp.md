# MowerApp

Information about the mowers current status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | Mode:   * &#x60;MAIN_AREA&#x60; - Mower will mow until low battery. Go home and charge. Leave and continue mowing.   * &#x60;SECONDARY_AREA&#x60; - Mower will mow until empty battery, or a limited time. When done, it stops in the garden.   * &#x60;HOME&#x60; - Mower goes home and parks forever.   * &#x60;DEMO&#x60; - Same as main area, but shorter times. (No blade operation)   * &#x60;UNKNOWN&#x60; - Unknown mode.   * &#x60;POI&#x60; - Point of interest.  | [default to undefined]
**activity** | **string** | Activity:   * &#x60;UNKNOWN&#x60; - Unknown.   * &#x60;NOT_APPLICABLE&#x60; - Not applicable.   * &#x60;MOWING&#x60; - Mower is currently mowing.   * &#x60;GOING_HOME&#x60; - Mower is currently going home to the charging station.   * &#x60;CHARGING&#x60; - Mower is currently charging. Note that the mower will only report the activity charging if it was its own decision to go home and charge. I.e., it would like to mow but is charging because it has to. If the mower is restricted it may very well charge when in the charging station, but the activity will be Parked.   * &#x60;LEAVING&#x60; - Mower is currently leaving the charging station and is heading out to a starting point.   * &#x60;PARKED_IN_CS&#x60; - Mower is parked in the charging station.   * &#x60;STOPPED_IN_GARDEN&#x60; - Mower has stopped in garden, for instance in manual mode when the task has been completed.  | [default to undefined]
**inactiveReason** | **string** | Inactive reason:   * &#x60;NONE&#x60; - No inactive reason.   * &#x60;PLANNING&#x60; - The mower is planning a path or a work area.   * &#x60;SEARCHING_FOR_SATELLITES&#x60; - Waiting for fix when using EPOS.  | [optional] [default to undefined]
**state** | **string** | State:   * &#x60;UNKNOWN&#x60; - Unknown.   * &#x60;PAUSED&#x60; - Not applicable.   * &#x60;IN_OPERATION&#x60; - Mower is operating according to selected mode. The activity gives information about what it is currently up to.   * &#x60;WAIT_UPDATING&#x60; - Mower is in wait state when updating.   * &#x60;WAIT_POWER_UP&#x60; - Mower is in wait state when powering up.   * &#x60;RESTRICTED&#x60; - The mower is currently restricted from mowing for some reason. It will continue mowing when the restriction is removed. The activity gives information about what the mower is currently up to.   * &#x60;OFF&#x60; - Mower is turned off   * &#x60;STOPPED&#x60; - Mower is stopped, and cannot be started remotely. Start requirements (safety or other) are not fulfilled.   * &#x60;ERROR&#x60; - A temporary error has occurred. If the error is resolved, the mower will resume operation without user interaction. Typically, this happens when the loop signal is lost. When it comes back, the operation is resumed.   * &#x60;FATAL_ERROR&#x60; - A fatal error has occurred. Error has to be fixed confirmed to leave this state.   * &#x60;ERROR_AT_POWER_UP&#x60; - An error at power up.  | [default to undefined]
**workAreaId** | **number** | Current work area id. If the mower supports work areas and the mower is working on a work area. If no current work area is selected this attribute is not set. | [optional] [default to undefined]
**errorCode** | **number** |  | [optional] [default to undefined]
**errorCodeTimestamp** | **number** | Timestamp for the last error code in milliseconds since 1970-01-01T00:00:00 in local time. NOTE! This timestamp is in local time for the mower and is coming directly from the mower. | [optional] [default to undefined]
**isErrorConfirmable** | **boolean** | If the mower has an errorCode this attribute state if the error is confirmable. If true the POST &#x60;/mowers/{id}/errors/confirm&#x60; will be successful.  | [optional] [default to undefined]

## Example

```typescript
import { MowerApp } from 'automower-connect-sdk';

const instance: MowerApp = {
    mode,
    activity,
    inactiveReason,
    state,
    workAreaId,
    errorCode,
    errorCodeTimestamp,
    isErrorConfirmable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
