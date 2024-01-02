import { IBaseEventData } from './base-event-data.interface';
import { IBaseHandleEventData } from './base-handle-event-data.interface';
import { IHandle } from './handle.interface';

/** {@link https://roundsliderui.com/document.html#valueChange ValueChange} event data */
export interface IValueChangeEventData
  extends IBaseEventData<'valueChange'>,
    Pick<IBaseHandleEventData<'valueChange'>, 'preValue'> {
  action: 'code' | 'change' | 'drag';
  handles: IHandle[];
  isInvertedRange?: boolean;
  isUserAction: boolean;
}
