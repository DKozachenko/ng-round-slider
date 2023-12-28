import { ISliderOptions } from './slider-options.interface';

export interface ISliderElement extends JQuery<HTMLDivElement> {
  roundSlider: (options: ISliderOptions) => void,
}
