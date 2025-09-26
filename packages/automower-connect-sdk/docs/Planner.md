# Planner

Information about the planner. The planner tells when the mower should work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextStartTimestamp** | **number** | Timestamp for the next auto start in milliseconds since 1970-01-01T00:00:00 in local time.  If the mower is charging then the value is the estimated time when it will be leaving the charging station.  If the value is 0 then the mower should start now.  NOTE! This timestamp is in local time for the mower and is coming directly from the mower. | [default to undefined]
**override** | [**PlannerOverride**](PlannerOverride.md) |  | [optional] [default to undefined]
**restrictedReason** | **string** | Restricted reason:   * &#x60;NONE&#x60; - No restricted reason.   * &#x60;WEEK_SCHEDULE&#x60; - There is no task in the Calendar right now, nothing to do.   * &#x60;PARK_OVERRIDE&#x60; - The restriction is because someone forced us to park, using the override feature.   * &#x60;SENSOR&#x60; - The sensor has decided that the grass is short enough, so there is no need to wear it down even more.   * &#x60;DAILY_LIMIT&#x60; - If a model has a maximum allowed mowing time per day, this restriction will apply when that time has run out.   * &#x60;FOTA&#x60; - When a Fota update is being transferred to the mower, we want to remain in the charging station to ensure that the transfer is successful. The restriction is removed when the transfer is done.   * &#x60;FROST&#x60; - The frost sensor thinks it is too cold to mow.   * &#x60;ALL_WORK_AREAS_COMPLETED&#x60; - All work areas are completed.   * &#x60;EXTERNAL&#x60; - An external reason set by an external tool. Can be IFTTT, Google Assistant or Amazon Alexa. See externalReason for more information  | [default to undefined]
**externalReason** | **number** | External reason set by i.e. IFTTT, Google Assistant or Amazon Alexa. Ranges:   * &#x60;1000 - 1999&#x60; - Google Assistant.   * &#x60;2000 - 2999&#x60; - Amazon Alexa.   * &#x60;3000 - 3999&#x60; - Home Assistant.   * &#x60;4000&#x60; - IFTTT, Wildlife consideration.   * &#x60;4001&#x60; - IFTTT, Frost &amp; rain guard.   * &#x60;4002&#x60; - IFTTT, Calendar connection.   * &#x60;4000 - 4999&#x60; - IFTTT.   * &#x60;5000 - 5999&#x60; - GARDENA Smart System.   * &#x60;6000&#x60; - Smart routine Rain guard   * &#x60;6001&#x60; - Smart routine Frost guard.   * &#x60;6500&#x60; - Smart routine Wildlife protection.   * &#x60;6000 - 6999&#x60; - Smart routine.   * &#x60;100 000 - 199 999&#x60; - IFTTT applets.   * &#x60;200 000 - 299 999&#x60; - Developer Portal.  | [optional] [default to undefined]

## Example

```typescript
import { Planner } from '@jboucly/automower-connect-sdk';

const instance: Planner = {
    nextStartTimestamp,
    override,
    restrictedReason,
    externalReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
