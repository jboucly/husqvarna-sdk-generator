# MowerData

A mower data object with all data for a mower.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system** | [**System**](System.md) |  | [default to undefined]
**battery** | [**Battery**](Battery.md) |  | [default to undefined]
**capabilities** | [**Capabilities**](Capabilities.md) |  | [optional] [default to undefined]
**mower** | [**MowerApp**](MowerApp.md) |  | [default to undefined]
**calendar** | [**Calendar**](Calendar.md) |  | [optional] [default to undefined]
**planner** | [**Planner**](Planner.md) |  | [default to undefined]
**metadata** | [**Metadata**](Metadata.md) |  | [default to undefined]
**positions** | [**Array&lt;Position&gt;**](Position.md) | List of the GPS positions. Latest registered position is first in the array and the oldest last in the array. Max number of positions is 50 after that the latest position is removed from the array. | [optional] [default to undefined]
**settings** | [**Settings**](Settings.md) |  | [optional] [default to undefined]
**statistics** | [**Statistics**](Statistics.md) |  | [optional] [default to undefined]
**stayOutZones** | [**StayOutZones**](StayOutZones.md) |  | [optional] [default to undefined]
**workAreas** | [**Array&lt;WorkArea&gt;**](WorkArea.md) | List of all work areas if supported by the Automower®. If empty list, no work areas are created. By default there should be a default work area with id 0. | [optional] [default to undefined]

## Example

```typescript
import { MowerData } from 'automower-connect-sdk';

const instance: MowerData = {
    system,
    battery,
    capabilities,
    mower,
    calendar,
    planner,
    metadata,
    positions,
    settings,
    statistics,
    stayOutZones,
    workAreas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
