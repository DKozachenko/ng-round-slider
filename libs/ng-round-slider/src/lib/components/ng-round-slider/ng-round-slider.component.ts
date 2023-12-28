import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import 'round-slider';
import { DEFAULT_PROPERTIES_OPTIONS, SLIDER_ID } from '../../models/constants';
import { IBaseHandleEventData, IBaseMoveEventData, IBeforeValueChangeEventData, ISliderControl, ISliderElement, ISliderProperties, IUpdateEventData, IValueChangeEventData } from '../../models/interfaces';
import { IBaseEventData } from '../../models/interfaces/base-event-data.interface';

//TODO: может дропнуть файлы стилей и шаблона, тк там ничего нет?
@Component({
  selector: 'ng-round-slider',
  standalone: true,
  templateUrl: './ng-round-slider.component.html',
  styleUrl: './ng-round-slider.component.scss'
})
export class NgRoundSliderComponent implements OnInit, AfterViewInit, OnChanges {
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
    return $(`#${SLIDER_ID}`) as ISliderElement;
  }

  private get sliderControl(): ISliderControl | undefined {
    return <ISliderControl | undefined>this.sliderElement.data("roundSlider");
  }

  public ngOnInit(): void {
    console.warn('test');
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

  public updateProperty(property: keyof ISliderProperties, value: any): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.option(property, value);
  }

  public setValue(value: number | string, index?: number): void {
    const control: ISliderControl | undefined = this.sliderControl;

    if (!control) {
      return;
    }

    control.setValue(value, index);
  }



  public ngAfterViewInit(): void {
    // TODO: run in ngOnInit
    this.init();
  }
}
