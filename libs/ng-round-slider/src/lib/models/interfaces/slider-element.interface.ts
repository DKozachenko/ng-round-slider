import { ISliderOptions } from './slider-options.interface';

/** Slider element */
export interface ISliderElement extends JQuery<HTMLDivElement> {
  roundSlider: (options: ISliderOptions) => void,
}
