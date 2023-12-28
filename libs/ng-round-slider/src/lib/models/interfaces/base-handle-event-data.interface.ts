import { IBaseMoveEventData } from './base-move-event-data.interface';
import { ISliderProperties } from './slider-properties.interface';

export interface IBaseHandleEventData<T> extends IBaseMoveEventData<T> {
  preValue: ISliderProperties['value']
}
