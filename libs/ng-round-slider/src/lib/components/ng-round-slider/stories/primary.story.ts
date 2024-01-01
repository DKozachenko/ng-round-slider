import { HandlerFunction, action } from '@storybook/addon-actions';
import { IBaseEventData, IBaseHandleEventData, IBaseMoveEventData, IBeforeValueChangeEventData, IUpdateEventData, IValueChangeEventData } from '@interfaces';
import { Story } from '../ng-round-slider.component.stories';

export const PrimaryStory: Story = {
  name: 'Primary',
  render: (args) => ({
    props: {
      ...args,
      beforeCreateLog: (data: IBaseEventData<'beforeCreate'>) => {
        const createAction: HandlerFunction = action('beforeCreate');
        createAction(data);
      },
      createLog: (data: IBaseEventData<'create'>) => {
        const createAction: HandlerFunction = action('create');
        createAction(data);
      },
      startLog: (data: IBaseMoveEventData<'start'>) => {
        const createAction: HandlerFunction = action('start');
        createAction(data);
      },
      stopLog: (data: IBaseMoveEventData<'stop'>) => {
        const createAction: HandlerFunction = action('stop');
        createAction(data);
      },
      dragLog: (data: IBaseHandleEventData<'drag'>) => {
        const createAction: HandlerFunction = action('drag');
        createAction(data);
      },
      changeLog: (data: IBaseHandleEventData<'change'>) => {
        const createAction: HandlerFunction = action('change');
        createAction(data);
      },
      updateLog: (data: IUpdateEventData) => {
        const createAction: HandlerFunction = action('update');
        createAction(data);
      },
      beforeValueChangeLog: (data: IBeforeValueChangeEventData) => {
        const createAction: HandlerFunction = action('beforeValueChange');
        createAction(data);
      },
      valueChangeLog: (data: IValueChangeEventData) => {
        const createAction: HandlerFunction = action('valueChange');
        createAction(data);
      },
    },
    template: `
      <ng-round-slider
        [animation]="animation"
        [width]="width"
        [circleShape]="circleShape"
        [disabled]="disabled"
        [editableTooltip]="editableTooltip"
        [endAngle]="endAngle"
        [handleSize]="handleSize"
        [handleShape]="handleShape"
        [keyboardAction]="keyboardAction"
        [lineCap]="lineCap"
        [max]="max"
        [min]="min"
        [mouseScrollAction]="mouseScrollAction"
        [radius]="radius"
        [readOnly]="readOnly"
        [showTooltip]="showTooltip"
        [sliderType]="sliderType"
        [startAngle]="startAngle"
        [startValue]="startValue"
        [step]="step"
        [value]="value"
        [svgMode]="svgMode"
        [borderWidth]="borderWidth"
        [borderColor]="borderColor"
        [pathColor]="pathColor"
        [rangeColor]="rangeColor"
        [tooltipColor]="tooltipColor"
        (beforeCreate)="beforeCreateLog($event)"
        (create)="createLog($event)"
        (start)="startLog($event)"
        (stop)="stopLog($event)"
        (drag)="dragLog($event)"
        (change)="changeLog($event)"
        (update)="updateLog($event)"
        (beforeValueChange)="beforeValueChangeLog($event)"
        (valueChange)="valueChangeLog($event)"
      ></ng-round-slider>
    `,
  }),
};