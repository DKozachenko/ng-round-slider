import { IBaseEventData } from './base-event-data.interface';
import { IBaseHandleEventData } from './base-handle-event-data.interface';
import { IBaseMoveEventData } from './base-move-event-data.interface';
import { IBeforeValueChangeEventData } from './before-value-change-event-data.interface';
import { IUpdateEventData } from './update-event-data.interface';
import { IValueChangeEventData } from './value-change-event-data.interface';

/** Slider events */
export interface ISliderEvents {
  /**
   * This event triggered before the control will initialize.
   *
   * At this point we can change the control's settings. And also this event can be cancellable, so we can prevent the control creation by 'return false'.
   */
  beforeCreate: ((data: IBaseEventData<'beforeCreate'>) => void) | null;
  /** This event triggered after the control creation or initialization. */
  create: ((data: IBaseEventData<'create'>) => void) | null;
  /** This event triggered when the user starts to drag the handle. */
  start: ((data: IBaseMoveEventData<'start'>) => void) | null;
  /** This event triggered when the user stops from sliding the handle / when releasing the handle. */
  stop: ((data: IBaseMoveEventData<'stop'>) => void) | null;
  /**
   * This event will be triggered before the value change happens.
   *
   * And this event can be cancellable. So whenever you want to restrict the slider for particular values at that time this will be useful.
   */
  beforeValueChange: ((data: IBeforeValueChangeEventData) => void) | null;
  /** This event triggered when the user moving the handle. On each mouse move the drag event will trigger. */
  drag: ((data: IBaseHandleEventData<'drag'>) => void) | null;
  /** This event triggered when the slider's value gets change. */
  change: ((data: IBaseHandleEventData<'change'>) => void) | null;
  /**
   * This event is the combination of 'drag' and 'change' events.
   *
   * Simply, whenever the slider value gets updated through the user interaction at that time it will be triggered.
   */
  update: ((data: IUpdateEventData) => void) | null;
  /** This event is similar to 'update' event, in addition it will trigger even the value was changed through programmatically also. */
  valueChange: ((data: IValueChangeEventData) => void) | null;
  /**
   * This event will act as a callback. So you can customize the tooltip template by returning with the custom values here.
   *
   * Check the below demo for better understanding:
   * * {@link https://roundsliderui.com/demos.html#custom-tooltip Custom Tooltip}
   */
  tooltipFormat: ((data: IBaseMoveEventData<'tooltipFormat'>) => string) | null;
}
