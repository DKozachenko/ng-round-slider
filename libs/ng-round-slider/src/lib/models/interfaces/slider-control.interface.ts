import { SliderPropertyValue } from '../types';
import { ISliderOptions } from './slider-options.interface';
import { ISliderProperties } from './slider-properties.interface';

export interface ISliderControl {
  option: (property: keyof ISliderProperties, value?: SliderPropertyValue) => void | SliderPropertyValue,
  /**
   * This method is used to set the value to the slider control.
   *
   * Note : This method accepts the following possible parameters.
   * * **setValue(value)** : This will set the corresponding value to the slider handle.
   * * **setValue(value, index)** : This is only applicable for range slider, which sets the value to the corresponding handle.Here the possible value of index is 1 or 2 only.
   */
  setValue: (value: number | string, index?: number) => void,
  /**
   * This method is used to get the value from the slider control.
   *
   * Note : This method accepts the following possible parameters.
   * * **getValue()** : Without any parameter, it will return the current slider value.
   * * **getValue(index)** : This is only applicable for range slider, which returns the value of the corresponding handle. Here the possible value of index is 1 or 2 only.
   */
  getValue: (index?: number) => ISliderOptions['value'],
  /**
   * This method is used to refresh the tooltip position, when it is misaligned.
   *
   * Mostly when you render the slider at 'display: none' mode then the tooltip may misaligned. At this point, if needed then you can refresh the tooltip once when the slider become 'display: block'.
   *
   * Hint :
   * * More likely, with the above mentioned situation, when you are using tooltip as custom template then only you may need to think about this.
   * Rest of the times you don't need to worry about this.
   */
  refreshTooltip: () => void,
  /**
   * Disables the slider control.
   *
   * Note : This method does not accept any parameters.
   */
  disable: () => void,
  /**
   * Enables the slider control.
   *
   * Note : This method does not accept any parameters.
   */
  enable: () => void,
  /**
   * Destroys the slider control and reverts the control element to the initial state.
   *
   * Note : This method does not accept any parameters.
   */
  destroy: () => void
}
