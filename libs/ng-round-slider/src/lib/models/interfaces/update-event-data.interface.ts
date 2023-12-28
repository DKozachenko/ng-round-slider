import { IBaseMoveEventData } from './base-move-event-data.interface';

export interface IUpdateEventData extends IBaseMoveEventData<'update'> {
  action: 'drag' | 'change'
}
