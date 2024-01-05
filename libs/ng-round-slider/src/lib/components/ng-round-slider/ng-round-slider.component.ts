import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery';
import 'round-slider';
import { DEFAULT_PROPERTIES_VALUES } from '../../models/constants';
import {
  IBaseEventData,
  IBaseHandleEventData,
  IBaseMoveEventData,
  IBeforeValueChangeEventData,
  ISliderControl,
  ISliderElement,
  ISliderEvents,
  ISliderOptions,
  ISliderProperties,
  IUpdateEventData,
  IValueChangeEventData,
} from '../../models/interfaces';
import { SliderId, SliderPropertyValue } from '../../models/types';

/**
 * Slider component that allows the user to select a value or range of values.
 *
 * {@link https://roundsliderui.com/ JQuery Plugin} which implemented as Angular component.
 */
@Component({
  selector: 'ng-round-slider',
  standalone: true,
  template: '<div [id]="id"></div>',
  /** Direct injection round slider styles */
  styleUrls: ['../../../../../../node_modules/round-slider/dist/roundslider.min.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgRoundSliderComponent
  implements ISliderProperties, Pick<ISliderEvents, 'tooltipFormat'>, OnInit, AfterViewInit, OnChanges, OnDestroy
{
  /** Slider div id */
  public id!: SliderId;

  /**
   * Enables or disables the handle movement animation.
   *
   * As the control uses the CSS3 animation, so you can use any CSS3 transition effects to customize the animation type and speed. To know how to use custom animation check here {@link https://roundsliderui.com/demos.html#custom-animation here}.
   */
  @Input({ required: false }) public animation: ISliderOptions['animation'] = DEFAULT_PROPERTIES_VALUES['animation'];
  /** Indicates the width (or thickness) of the slider. */
  @Input({ required: false }) public width: ISliderOptions['width'] = DEFAULT_PROPERTIES_VALUES['width'];
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
  @Input({ required: false }) public circleShape: ISliderOptions['circleShape'] =
    DEFAULT_PROPERTIES_VALUES['circleShape'];
  /**
   * Sets the disable state or enable state of the control. While the control in the disable state we can't interact with this.
   *
   * And in disable mode the control looks like in the blured state.
   */
  @Input({ required: false }) public disabled: ISliderOptions['disabled'] = DEFAULT_PROPERTIES_VALUES['disabled'];
  /** Enables the editable option of tooltip. When this property set as true, we can change the value by editing the tooltip. */
  @Input({ required: false }) public editableTooltip: ISliderOptions['editableTooltip'] =
    DEFAULT_PROPERTIES_VALUES['editableTooltip'];
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
  @Input({ required: false }) public endAngle: ISliderOptions['endAngle'] = DEFAULT_PROPERTIES_VALUES['endAngle'];
  /**
   * The handleSize property mentions the size of the handle.
   *
   * Multiple format supported:
   * * **22** : Sets the fixed size, where the handle's height and width considered as 22.
   * * **"30,10"** : Sets the fixed size, where the handle's height considered as 30 and width considered as 10.
   * * **"+4"** : This is dependent to width property. If the width is 20 then the handleSize considered as 24.
   * * **"-4"** : This is also dependent to width property. If the width is 20 then the handleSize considered as 16.
   */
  @Input({ required: false }) public handleSize: ISliderOptions['handleSize'] = DEFAULT_PROPERTIES_VALUES['handleSize'];
  /**
   * The handleShape property mentions the shape of the handle. Currently the following types are available:
   * * **round**
   * * **dot**
   * * **square**
   *
   * In addition you can make your own handle shape by customizing this. Please check {@link https://roundsliderui.com/demos.html#custom-handle-shape here} for handle customization.
   */
  @Input({ required: false }) public handleShape: ISliderOptions['handleShape'] =
    DEFAULT_PROPERTIES_VALUES['handleShape'];
  /**
   * Enables or disables the keyboard functionality.
   *
   * The slider value can be changed through the keyboard by using the arrow keys (Up, Down, Left, Right) and Home, Down keys.
   */
  @Input({ required: false }) public keyboardAction: ISliderOptions['keyboardAction'] =
    DEFAULT_PROPERTIES_VALUES['keyboardAction'];
  /**
   * The lineCap property mentions the shape at the end part of the path. This is not applicable for the "full" circle shape, except this all other circle shapes supports lineCap.
   *
   * The possible inputs for this property is:
   * * **square**
   * * **round**
   * * **butt**
   */
  @Input({ required: false }) public lineCap: ISliderOptions['lineCap'] = DEFAULT_PROPERTIES_VALUES['lineCap'];
  /** The max property indicates the maximum value of the slider. */
  @Input({ required: false }) public max: ISliderOptions['max'] = DEFAULT_PROPERTIES_VALUES['max'];
  /** The min property indicates the minimum value of the slider. */
  @Input({ required: false }) public min: ISliderOptions['min'] = DEFAULT_PROPERTIES_VALUES['min'];
  /**
   * Enables or disables the mouse scroll functionality.
   *
   * The slider value can be changed through the mouse scrolling.
   */
  @Input({ required: false }) public mouseScrollAction: ISliderOptions['mouseScrollAction'] =
    DEFAULT_PROPERTIES_VALUES['mouseScrollAction'];
  /**
   * The radius property indicates the radius of the slider's circle.
   *
   * Note : The height and width of the control considered as (2 * radius).
   */
  @Input({ required: false }) public radius: ISliderOptions['radius'] = DEFAULT_PROPERTIES_VALUES['radius'];
  /** This enables the control into the readOnly mode, so we can can't interact with the control when readOnly enabled. */
  @Input({ required: false }) public readOnly: ISliderOptions['readOnly'] = DEFAULT_PROPERTIES_VALUES['readOnly'];
  /** Enables or disables the tooltip inside the slider. */
  @Input({ required: false }) public showTooltip: ISliderOptions['showTooltip'] =
    DEFAULT_PROPERTIES_VALUES['showTooltip'];
  /**
   * Indicates the slider type to be render. The available slider types are:
   * * **default**
   * * **min-range**
   * * **range**
   */
  @Input({ required: false }) public sliderType: ISliderOptions['sliderType'] = DEFAULT_PROPERTIES_VALUES['sliderType'];
  /**
   * Indicates the starting point of the slider.
   *
   * The startAngle property is applicable for "full", "custom-half", "custom-quarter" and "pie" circle shapes only.
   */
  @Input({ required: false }) public startAngle: ISliderOptions['startAngle'] = DEFAULT_PROPERTIES_VALUES['startAngle'];
  /**
   * This property decides at which point the slider should start. Otherwise, by default the slider starts with min value.
   *
   * This is mainly used for min-range slider, where you can customize the min-range start position.
   */
  @Input({ required: false }) public startValue: ISliderOptions['startValue'] = DEFAULT_PROPERTIES_VALUES['startValue'];
  /** Decides the number of steps or value should take while we move the handle. */
  @Input({ required: false }) public step: ISliderOptions['step'] = DEFAULT_PROPERTIES_VALUES['step'];
  /**
   * Sets or gets the value of the slider.
   *
   * For default and min-range slider the property allows a single value (ex: value - 10)
   * For range slider the property allows two values separated by comma (ex: value - "30,60").
   */
  @Input({ required: false }) public value: ISliderOptions['value'] = DEFAULT_PROPERTIES_VALUES['value'];
  /**
   * This will enables the slider into the SVG mode.
   *
   * Through SVG mode you can do a lot of customization, and it will resolve all the legacy issues.
   *
   * Note : It is recommended to use the SVG mode for better usability and customization.
   */
  @Input({ required: false }) public svgMode: ISliderOptions['svgMode'] = DEFAULT_PROPERTIES_VALUES['svgMode'];
  /**
   * Indicates the border width of the slider.
   *
   * Note : This is only applicable for {@link https://roundsliderui.com/document.html#svgMode SVG mode}
   */
  @Input({ required: false }) public borderWidth: ISliderOptions['borderWidth'] =
    DEFAULT_PROPERTIES_VALUES['borderWidth'];
  /** Sets the border color of the slider. */
  @Input({ required: false }) public borderColor: ISliderOptions['borderColor'] =
    DEFAULT_PROPERTIES_VALUES['borderColor'];
  /** Sets the path color of the slider. */
  @Input({ required: false }) public pathColor: ISliderOptions['pathColor'] = DEFAULT_PROPERTIES_VALUES['pathColor'];
  /** Sets the range color of the slider. */
  @Input({ required: false }) public rangeColor: ISliderOptions['rangeColor'] = DEFAULT_PROPERTIES_VALUES['rangeColor'];
  /** Sets the tooltip color of the slider. */
  @Input({ required: false }) public tooltipColor: ISliderOptions['tooltipColor'] =
    DEFAULT_PROPERTIES_VALUES['tooltipColor'];
  /**
   * This event will act as a callback. So you can customize the tooltip template by returning with the custom values here.
   *
   * Check the below demo for better understanding:
   * * {@link https://roundsliderui.com/demos.html#custom-tooltip Custom Tooltip}
   */
  @Input({ required: false }) public tooltipFormat: ISliderEvents['tooltipFormat'] = null;

  /**
   * This event triggered before the control will initialize.
   *
   * At this point we can change the control's settings. And also this event can be cancellable, so we can prevent the control creation by 'return false'.
   */
  @Output() public readonly beforeCreate: EventEmitter<IBaseEventData<'beforeCreate'>> = new EventEmitter<
    IBaseEventData<'beforeCreate'>
  >();
  /** This event triggered after the control creation or initialization. */
  @Output() public readonly create: EventEmitter<IBaseEventData<'create'>> = new EventEmitter<
    IBaseEventData<'create'>
  >();
  /** This event triggered when the user starts to drag the handle. */
  /* eslint-disable-next-line @angular-eslint/no-output-native */
  @Output() public readonly start: EventEmitter<IBaseMoveEventData<'start'>> = new EventEmitter<
    IBaseMoveEventData<'start'>
  >();
  /** This event triggered when the user stops from sliding the handle / when releasing the handle. */
  @Output() public readonly stop: EventEmitter<IBaseMoveEventData<'stop'>> = new EventEmitter<
    IBaseMoveEventData<'stop'>
  >();
  /**
   * This event will be triggered before the value change happens.
   *
   * And this event can be cancellable. So whenever you want to restrict the slider for particular values at that time this will be useful.
   */
  @Output() public readonly beforeValueChange: EventEmitter<IBeforeValueChangeEventData> =
    new EventEmitter<IBeforeValueChangeEventData>();
  /** This event triggered when the user moving the handle. On each mouse move the drag event will trigger. */
  /* eslint-disable-next-line @angular-eslint/no-output-native */
  @Output() public readonly drag: EventEmitter<IBaseHandleEventData<'drag'>> = new EventEmitter<
    IBaseHandleEventData<'drag'>
  >();
  /** This event triggered when the slider's value gets change. */
  /* eslint-disable-next-line @angular-eslint/no-output-native */
  @Output() public readonly change: EventEmitter<IBaseHandleEventData<'change'>> = new EventEmitter<
    IBaseHandleEventData<'change'>
  >();
  /**
   * This event is the combination of 'drag' and 'change' events.
   *
   * Simply, whenever the slider value gets updated through the user interaction at that time it will be triggered.
   */
  @Output() public readonly update: EventEmitter<IUpdateEventData> = new EventEmitter<IUpdateEventData>();
  /** This event is similar to 'update' event, in addition it will trigger even the value was changed through programmatically also. */
  @Output() public readonly valueChange: EventEmitter<IValueChangeEventData> =
    new EventEmitter<IValueChangeEventData>();

  /** Slider element */
  private get sliderElement(): ISliderElement {
    return $(`#${this.id}`) as ISliderElement;
  }

  /** Slider control */
  private get sliderControl(): ISliderControl | undefined {
    return <ISliderControl | undefined>this.sliderElement.data('roundSlider');
  }

  /** Initialization */
  private init(): void {
    this.sliderElement.roundSlider({
      animation: this.animation,
      min: this.min,
      max: this.max,
      step: this.step,
      value: this.value,
      radius: this.radius,
      width: this.width,
      handleSize: this.handleSize,
      startAngle: this.startAngle,
      endAngle: this.endAngle,
      showTooltip: this.showTooltip,
      editableTooltip: this.editableTooltip,
      readOnly: this.readOnly,
      disabled: this.disabled,
      keyboardAction: this.keyboardAction,
      mouseScrollAction: this.mouseScrollAction,
      sliderType: this.sliderType,
      circleShape: this.circleShape,
      handleShape: this.handleShape,
      lineCap: this.lineCap,
      startValue: this.startValue,
      // SVG related properties
      svgMode: this.svgMode,
      borderWidth: this.borderWidth,
      borderColor: this.borderColor,
      pathColor: this.pathColor,
      rangeColor: this.rangeColor,
      tooltipColor: this.tooltipColor,
      // Events
      beforeCreate: (data: IBaseEventData<'beforeCreate'>) => this.beforeCreate.emit(data),
      create: (data: IBaseEventData<'create'>) => this.create.emit(data),
      start: (data: IBaseMoveEventData<'start'>) => this.start.emit(data),
      stop: (data: IBaseMoveEventData<'stop'>) => this.stop.emit(data),
      beforeValueChange: (data: IBeforeValueChangeEventData) => this.beforeValueChange.emit(data),
      drag: (data: IBaseHandleEventData<'drag'>) => this.drag.emit(data),
      change: (data: IBaseHandleEventData<'change'>) => this.change.emit(data),
      update: (data: IUpdateEventData) => this.update.emit(data),
      valueChange: (data: IValueChangeEventData) => this.valueChange.emit(data),
      tooltipFormat: this.tooltipFormat,
    });
  }

  /** Updating properties according to changes */
  private refresh(changes: SimpleChanges): void {
    for (const key of Object.keys(changes)) {
      const change: SimpleChange = changes[key];
      if (change.firstChange) {
        continue;
      }

      const propValue: SliderPropertyValue | undefined = this.getProperty(<keyof ISliderProperties>key);
      if (propValue === change.currentValue) {
        continue;
      }

      this.setProperty(<keyof ISliderProperties>key, change.currentValue);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.refresh(changes);
  }

  public ngOnInit(): void {
    this.id = `round-slider-${uuidv4()}`;
  }

  public ngAfterViewInit(): void {
    this.init();
  }

  /** Receiving property value */
  public getProperty(property: keyof ISliderProperties): SliderPropertyValue | undefined {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    return <SliderPropertyValue>control.option(property);
  }

  /** Setting property value */
  public setProperty(property: keyof ISliderProperties, value: SliderPropertyValue): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.option(property, value);
  }

  /**
   * This method is used to set the value to the slider control.
   *
   * Note : This method accepts the following possible parameters.
   * * **setValue(value)** : This will set the corresponding value to the slider handle.
   * * **setValue(value, index)** : This is only applicable for range slider, which sets the value to the corresponding handle.Here the possible value of index is 1 or 2 only.
   */
  public setValue(value: number | string, index?: number): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.setValue(value, index);
  }

  /**
   * This method is used to get the value from the slider control.
   *
   * Note : This method accepts the following possible parameters.
   * * **getValue()** : Without any parameter, it will return the current slider value.
   * * **getValue(index)** : This is only applicable for range slider, which returns the value of the corresponding handle. Here the possible value of index is 1 or 2 only.
   */
  public getValue(index?: number): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.getValue(index);
  }

  /**
   * This method is used to refresh the tooltip position, when it is misaligned.
   *
   * Mostly when you render the slider at 'display: none' mode then the tooltip may misaligned. At this point, if needed then you can refresh the tooltip once when the slider become 'display: block'.
   *
   * Hint :
   * * More likely, with the above mentioned situation, when you are using tooltip as custom template then only you may need to think about this.
   * Rest of the times you don't need to worry about this.
   */
  public refreshTooltip(): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.refreshTooltip();
  }

  /**
   * Disables the slider control.
   *
   * Note : This method does not accept any parameters.
   */
  public disable(): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.disable();
  }

  /**
   * Enables the slider control.
   *
   * Note : This method does not accept any parameters.
   */
  public enable(): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.enable();
  }

  /**
   * Destroys the slider control and reverts the control element to the initial state.
   *
   * Note : This method does not accept any parameters.
   */
  public destroy(): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.destroy();
  }

  public ngOnDestroy(): void {
    this.destroy();
  }
}
