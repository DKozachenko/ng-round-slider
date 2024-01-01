import { ISliderEvents } from './slider-events.interface';
import { ISliderProperties } from './slider-properties.interface';

/** Slider initialization options (properties and events) */
export interface ISliderOptions extends ISliderProperties, ISliderEvents {}
