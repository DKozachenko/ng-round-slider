import { IBaseEventData } from './base-event-data.interface';
import { IBaseHandleEventData } from './base-handle-event-data.interface';

/** {@link https://roundsliderui.com/document.html#beforeValueChange BeforeValueChange} event data */
export interface IBeforeValueChangeEventData
  extends IBaseEventData<'beforeValueChange'>,
    Pick<IBaseHandleEventData<'beforeValueChange'>, 'preValue'> {
  action: 'code' | 'change' | 'drag';
  cancelable: boolean;
  isUserAction: boolean;
}
