import type { Meta, StoryObj } from '@storybook/angular';
import { HandlerFunction, action } from '@storybook/addon-actions';
import { NgRoundSliderComponent } from './ng-round-slider.component';
import {
  IBaseEventData,
  IBaseHandleEventData,
  IBaseMoveEventData,
  IBeforeValueChangeEventData,
  IUpdateEventData,
  IValueChangeEventData,
} from '../../models/interfaces';
import { DEFAULT_PROPERTIES_OPTIONS } from '../../models/constants';

const meta: Meta<NgRoundSliderComponent> = {
  component: NgRoundSliderComponent,
  title: 'NgRoundSliderComponent',
  tags: ['autodocs'],
  args: {
    animation: DEFAULT_PROPERTIES_OPTIONS['animation'],
    value: undefined,
  },
  argTypes: {
    animation: {
      name: 'animation',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['animation'],
      description: `Enables or disables the handle movement animation.
      As the control uses the CSS3 animation, so you can use any CSS3 transition effects to customize the animation type and speed. To know how to use custom animation check <a href="https://roundsliderui.com/demos.html#custom-animation">here</a>.`,
      control: {
        type: 'boolean',
      },
    },
    value: {
      name: 'value',
      defaultValue: null,
      description: 'Initial value',
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments',
      },
    },
  },
};
export default meta;
type Story = StoryObj<NgRoundSliderComponent>;

export const Primary: Story = {
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
        [value]="value"
        (beforeCreate)="beforeCreateLog($event)"
        (create)="createLog($event)"
        (start)="startLog($event)"
        (drag)="dragLog($event)"
        (change)="changeLog($event)"
        (update)="updateLog($event)"
        (beforeValueChange)="beforeValueChangeLog($event)"
        (valueChange)="valueChangeLog($event)"
      ></ng-round-slider>
    `,
  }),
};
