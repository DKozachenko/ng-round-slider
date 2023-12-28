import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as $ from 'jquery';
import 'round-slider';
import { DEFAULT_PROPERTIES_OPTIONS } from '../../models/constants';
import { IBaseHandleEventData, IBaseMoveEventData, IBeforeValueChangeEventData, ISliderControl, ISliderElement, ISliderProperties, IUpdateEventData, IValueChangeEventData } from '../../models/interfaces';
import { IBaseEventData } from '../../models/interfaces/base-event-data.interface';
import { SliderId, SliderPropertyValue } from '../../models/types';

//TODO: может дропнуть файлы стилей и шаблона, тк там ничего нет?
@Component({
  selector: 'ng-round-slider',
  standalone: true,
  templateUrl: './ng-round-slider.component.html',
  styleUrl: './ng-round-slider.component.scss'
})
export class NgRoundSliderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  public id!: SliderId;

  @Input({ required: false }) public value?: number = undefined;

  /**
   * This event triggered before the control will initialize.
   *
   * At this point we can change the control's settings. And also this event can be cancellable, so we can prevent the control creation by 'return false'.
   */
  @Output() public readonly beforeCreate: EventEmitter<IBaseEventData<'beforeCreate'>> = new EventEmitter<IBaseEventData<'beforeCreate'>>();
  /** This event triggered after the control creation or initialization. */
  @Output() public readonly create: EventEmitter<IBaseEventData<'create'>> = new EventEmitter<IBaseEventData<'create'>>();
  /** This event triggered when the user starts to drag the handle. */
  @Output() public readonly start: EventEmitter<IBaseMoveEventData<'start'>> = new EventEmitter<IBaseMoveEventData<'start'>>();
  /** This event triggered when the user stops from sliding the handle / when releasing the handle. */
  @Output() public readonly stop: EventEmitter<IBaseMoveEventData<'stop'>> = new EventEmitter<IBaseMoveEventData<'stop'>>();
  /**
   * This event will be triggered before the value change happens.
   *
   * And this event can be cancellable. So whenever you want to restrict the slider for particular values at that time this will be useful.
   */
  @Output() public readonly beforeValueChange: EventEmitter<IBeforeValueChangeEventData> = new EventEmitter<IBeforeValueChangeEventData>();
  /** This event triggered when the user moving the handle. On each mouse move the drag event will trigger. */
  @Output() public readonly drag: EventEmitter<IBaseHandleEventData<'drag'>> = new EventEmitter<IBaseHandleEventData<'drag'>>();
  /** This event triggered when the slider's value gets change. */
  @Output() public readonly change: EventEmitter<IBaseHandleEventData<'change'>> = new EventEmitter<IBaseHandleEventData<'change'>>();
  /**
   * This event is the combination of 'drag' and 'change' events.
   *
   * Simply, whenever the slider value gets updated through the user interaction at that time it will be triggered.
   */
  @Output() public readonly update: EventEmitter<IUpdateEventData> = new EventEmitter<IUpdateEventData>();
  /** This event is similar to 'update' event, in addition it will trigger even the value was changed through programmatically also. */
  @Output() public readonly valueChange: EventEmitter<IValueChangeEventData> = new EventEmitter<IValueChangeEventData>();

  private get sliderElement(): ISliderElement {
    return $(`#${this.id}`) as ISliderElement;
  }

  private get sliderControl(): ISliderControl | undefined {
    return <ISliderControl | undefined>this.sliderElement.data("roundSlider");
  }

  public ngOnInit(): void {
    this.id = `round-slider-${uuidv4()}`;

    // setTimeout(() => {
    //   this.destroy();
    // }, 5000)
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.updateProperty('value', changes['value'].currentValue);
  }

  private init(): void {
    this.sliderElement.roundSlider({
      min: 0,
      max: 100,
      step: 1,
      value: this.value ?? DEFAULT_PROPERTIES_OPTIONS['value'],
      radius: 85,
      width: DEFAULT_PROPERTIES_OPTIONS['width'],
      handleSize: "+0",
      startAngle: 0,
      endAngle: "+360",
      animation: true,
      showTooltip: true,
      editableTooltip: true,
      readOnly: false,
      disabled: false,
      keyboardAction: true,
      mouseScrollAction: false,
      sliderType: "default",
      circleShape: "full",
      handleShape: "round",
      lineCap: "butt",

      startValue: null,

      svgMode: false,
      borderWidth: 1,
      borderColor: null,
      pathColor: null,
      rangeColor: null,
      tooltipColor: null,

      beforeCreate: (data: IBaseEventData<'beforeCreate'>) => this.beforeCreate.emit(data),
      create: (data: IBaseEventData<'create'>) => this.create.emit(data),
      start: (data: IBaseMoveEventData<'start'>) => this.start.emit(data),
      stop: (data: IBaseMoveEventData<'stop'>) => this.stop.emit(data),
      beforeValueChange: (data: IBeforeValueChangeEventData) => this.beforeValueChange.emit(data),
      drag: (data: IBaseHandleEventData<'drag'>) => this.drag.emit(data),
      change: (data: IBaseHandleEventData<'change'>) => this.change.emit(data),
      update: (data: IUpdateEventData) => this.update.emit(data),
      valueChange: (data: IValueChangeEventData) => this.valueChange.emit(data),
      tooltipFormat: () => {}
    });
  }

  public ngAfterViewInit(): void {
    // TODO: run in ngOnInit
    this.init();
  }

  public updateProperty(property: keyof ISliderProperties, value: SliderPropertyValue): void {
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
