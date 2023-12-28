import { ISliderProperties } from './slider-properties.interface';

export interface ISliderControl {
  option: (property: keyof ISliderProperties, value: any) => void,
  setValue: (value: number | string, index?: number) => void
}
