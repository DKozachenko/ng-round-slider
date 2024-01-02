import { IBaseMoveEventData } from './base-move-event-data.interface';

/** {@link https://roundsliderui.com/document.html#update Update} event data */
export interface IUpdateEventData extends IBaseMoveEventData<'update'> {
  action: 'drag' | 'change';
}
