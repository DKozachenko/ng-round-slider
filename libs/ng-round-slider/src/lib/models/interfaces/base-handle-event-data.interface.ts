import { IBaseMoveEventData } from './base-move-event-data.interface';
import { ISliderProperties } from './slider-properties.interface';

/** Base handle event (drag, change) data */
export interface IBaseHandleEventData<T> extends IBaseMoveEventData<T> {
  preValue: ISliderProperties['value'];
}
