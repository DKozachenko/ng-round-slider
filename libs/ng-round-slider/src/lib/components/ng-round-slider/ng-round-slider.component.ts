import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import 'round-slider';
import { DEFAULT_PROPERTIES_OPTIONS, SLIDER_ID } from '../../models/constants';
import { IBeforeCreateData, ISliderControl, ISliderElement, ISliderProperties } from '../../models/interfaces';

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
  @Output() public beforeCreate: EventEmitter<IBeforeCreateData> = new EventEmitter<IBeforeCreateData>();

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
    this.update('value', changes['value'].currentValue);
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

      // the 'startValue' property decides at which point the slider should start.
      // otherwise, by default the slider starts with min value. this is mainly used
      // for min-range slider, where you can customize the min-range start position.
      startValue: null,

      // SVG related properties
      svgMode: false,
      borderWidth: 1,
      borderColor: null,
      pathColor: null,
      rangeColor: null,
      tooltipColor: null,

      // // events
      beforeCreate: (data: IBeforeCreateData) => this.beforeCreate.emit(data),
      // create: undefined,
      // start: undefined,
      // // 'beforeValueChange' will be triggered before 'valueChange', and it can be cancellable
      // beforeValueChange: undefined,
      // drag: undefined,
      // change: undefined,
      // // 'update' event is the combination of 'drag' and 'change'
      // update: undefined,
      // // 'valueChange' event is similar to 'update' event, in addition it will trigger
      // // even the value was changed through programmatically also.
      // valueChange: undefined,
      // stop: undefined,
      // tooltipFormat: undefined
    });
  }

  public update(property: keyof ISliderProperties, value: any): void {
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
