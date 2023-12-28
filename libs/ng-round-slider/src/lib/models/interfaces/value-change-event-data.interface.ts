import { IBaseEventData } from './base-event-data.interface';
import { IBaseHandleEventData } from './base-handle-event-data.interface';
import { IHandle } from './handle.interface';

export interface IValueChangeEventData
  extends IBaseEventData<'valueChange'>,
    Pick<IBaseHandleEventData<'valueChange'>, 'preValue'> {
  action: 'code' | 'change' | 'drag';
  handles: IHandle[],
  isInvertedRange?: boolean;
  isUserAction: boolean;
}
