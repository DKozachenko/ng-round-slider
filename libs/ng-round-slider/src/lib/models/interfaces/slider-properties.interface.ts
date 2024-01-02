import { CircleShape, HandleShape, LineCap, SliderType } from '../types';

/** Slider properties */
export interface ISliderProperties {
  /**
   * Enables or disables the handle movement animation.
   *
   * As the control uses the CSS3 animation, so you can use any CSS3 transition effects to customize the animation type and speed. To know how to use custom animation check here {@link https://roundsliderui.com/demos.html#custom-animation here}.
   */
  animation: boolean | null;
  /** Indicates the width (or thickness) of the slider. */
  width: number | null;
  /** Indicates the circle shape to be render. The available circle shapes are:
   * * full
   * * half-top
   * * half-bottom
   * * half-left
   * * half-right
   * * quarter-top-left
   * * quarter-top-right
   * * quarter-bottom-right
   * * quarter-bottom-left
   * * pie
   * * custom-half
   * * custom-quarter
   */
  circleShape: CircleShape | null;
  /**
   * Sets the disable state or enable state of the control. While the control in the disable state we can't interact with this.
   *
   * And in disable mode the control looks like in the blured state.
   */
  disabled: boolean | null;
  /** Enables the editable option of tooltip. When this property set as true, we can change the value by editing the tooltip. */
  editableTooltip: boolean | null;
  /**
   * Indicates the end point of the slider.
   *
   * Multiple format supported:
   * * **180** : Sets the fixed value, where the endAngle is 180°.
   * * **"+180"** : This is dependent to startAngle property. If the startAngle is 90° then the endAngle considered as 270°.
   * * **"-90"** : This is also dependent to startAngle property. If the startAngle is 180° then the endAngle considered as 90°.
   *
   * The endAngle property is applicable for "full" circle shape only.
   */
  endAngle: string | number | null;
  /**
   * The handleSize property mentions the size of the handle.
   *
   * Multiple format supported:
   * * **22** : Sets the fixed size, where the handle's height and width considered as 22.
   * * **"30,10"** : Sets the fixed size, where the handle's height considered as 30 and width considered as 10.
   * * **"+4"** : This is dependent to width property. If the width is 20 then the handleSize considered as 24.
   * * **"-4"** : This is also dependent to width property. If the width is 20 then the handleSize considered as 16.
   */
  handleSize: string | number | null;
  /**
   * The handleShape property mentions the shape of the handle. Currently the following types are available:
   * * **round**
   * * **dot**
   * * **square**
   *
   * In addition you can make your own handle shape by customizing this. Please check {@link https://roundsliderui.com/demos.html#custom-handle-shape here} for handle customization.
   */
  handleShape: HandleShape | null;
  /**
   * Enables or disables the keyboard functionality.
   *
   * The slider value can be changed through the keyboard by using the arrow keys (Up, Down, Left, Right) and Home, Down keys.
   */
  keyboardAction: boolean | null;
  /**
   * The lineCap property mentions the shape at the end part of the path. This is not applicable for the "full" circle shape, except this all other circle shapes supports lineCap.
   *
   * The possible inputs for this property is:
   * * **square**
   * * **round**
   * * **butt**
   */
  lineCap: LineCap | null;
  /** The max property indicates the maximum value of the slider. */
  max: number | null;
  /** The min property indicates the minimum value of the slider. */
  min: number | null;
  /**
   * Enables or disables the mouse scroll functionality.
   *
   * The slider value can be changed through the mouse scrolling.
   */
  mouseScrollAction: boolean | null;
  /**
   * The radius property indicates the radius of the slider's circle.
   *
   * Note : The height and width of the control considered as (2 * radius).
   */
  radius: number | null;
  /** This enables the control into the readOnly mode, so we can can't interact with the control when readOnly enabled. */
  readOnly: boolean | null;
  /** Enables or disables the tooltip inside the slider. */
  showTooltip: boolean | null;
  /**
   * Indicates the slider type to be render. The available slider types are:
   * * **default**
   * * **min-range**
   * * **range**
   */
  sliderType: SliderType | null;
  /**
   * Indicates the starting point of the slider.
   *
   * The startAngle property is applicable for "full", "custom-half", "custom-quarter" and "pie" circle shapes only.
   */
  startAngle: number | null;
  /**
   * This property decides at which point the slider should start. Otherwise, by default the slider starts with min value.
   *
   * This is mainly used for min-range slider, where you can customize the min-range start position.
   */
  startValue: number | null;
  /** Decides the number of steps or value should take while we move the handle. */
  step: number | null;
  /**
   * Sets or gets the value of the slider.
   *
   * For default and min-range slider the property allows a single value (ex: value - 10)
   * For range slider the property allows two values separated by comma (ex: value - "30,60").
   */
  value: string | number | null;
  /**
   * This will enables the slider into the SVG mode.
   *
   * Through SVG mode you can do a lot of customization, and it will resolve all the legacy issues.
   *
   * Note : It is recommended to use the SVG mode for better usability and customization.
   */
  svgMode: boolean | null;
  /**
   * Indicates the border width of the slider.
   *
   * Note : This is only applicable for {@link https://roundsliderui.com/document.html#svgMode SVG mode}
   */
  borderWidth: number | null;
  /** Sets the border color of the slider. */
  borderColor: string | null;
  /** Sets the path color of the slider. */
  pathColor: string | null;
  /** Sets the range color of the slider. */
  rangeColor: string | null;
  /** Sets the tooltip color of the slider. */
  tooltipColor: string | null;
}
