import { IBaseEventData } from './base-event-data.interface';
import { IHandle } from './handle.interface';

export interface IBaseMoveEventData<T> extends IBaseEventData<T> {
  handle: IHandle
}
