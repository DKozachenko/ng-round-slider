import { SliderId } from '../types';
import { ISliderElement } from './slider-element.interface';
import { ISliderOptions } from './slider-options.interface';

/** Base slider event data */
export interface IBaseEventData<T> {
  control: {
    0: ISliderElement;
  };
  id: SliderId;
  type: T;
  options: ISliderOptions;
  value: ISliderOptions['value'];
}
