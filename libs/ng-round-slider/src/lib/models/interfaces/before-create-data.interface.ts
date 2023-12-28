import { SliderId } from '../types';
import { ISliderElement } from './slider-element.interface';
import { ISliderOptions } from './slider-options.interface';

export interface IBeforeCreateData {
  control: ISliderElement[],
  id: SliderId,
  type: 'beforeCreate',
  options: ISliderOptions,
  value: ISliderOptions['value']
}
