import { IBeforeCreateData } from './before-create-data.interface';

export interface ISliderEvents {
  /**
   * This event triggered before the control will initialize.
   *
   * At this point we can change the control's settings. And also this event can be cancellable, so we can prevent the control creation by 'return false'.
   */
  beforeCreate: (data: IBeforeCreateData) => void
}
