import { IBaseEventData } from './base-event-data.interface';
import { IHandle } from './handle.interface';

/** Base move event (start, stop) data */
export interface IBaseMoveEventData<T> extends IBaseEventData<T> {
  handle: IHandle;
}
