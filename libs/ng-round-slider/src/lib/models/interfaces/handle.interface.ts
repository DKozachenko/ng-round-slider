import { ISliderProperties } from './slider-properties.interface'

/** Handle */
export interface IHandle {
  angle: number,
  element: {
    0: JQuery<HTMLDivElement>,
    prevObject: {
      0: JQuery<HTMLDivElement>
    }
  }
  index: number,
  isActive: boolean,
  value: ISliderProperties['value']
}
