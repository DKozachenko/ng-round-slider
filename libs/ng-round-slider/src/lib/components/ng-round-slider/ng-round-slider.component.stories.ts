import type { Meta, StoryObj } from '@storybook/angular';
import { NgRoundSliderComponent } from './ng-round-slider.component';
import { IBaseEventData, IBaseHandleEventData, IBaseMoveEventData, IBeforeValueChangeEventData, IUpdateEventData, IValueChangeEventData } from '../../models/interfaces';

const meta: Meta<NgRoundSliderComponent> = {
  component: NgRoundSliderComponent,
  title: 'NgRoundSliderComponent',
  args: {
    value: 9,
  },
  argTypes: {
    value: {
      name: 'value',
      defaultValue: null,
      description: 'Initial value',
      control: {
        type: 'number'
      }
    }
  }
};
export default meta;
type Story = StoryObj<NgRoundSliderComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: {
      ...args,
      beforeCreateLog: (data: IBaseEventData<'beforeCreate'>) => {
        console.warn('beforeCreate: ', data);
      },
      createLog: (data: IBaseEventData<'create'>) => {
        console.warn('create: ', data);
      },
      startLog: (data: IBaseMoveEventData<'start'>) => {
        console.warn('start: ', data);
      },
      stopLog: (data: IBaseMoveEventData<'stop'>) => {
        console.warn('stop: ', data);
      },
      dragLog: (data: IBaseHandleEventData<'drag'>) => {
        console.warn('drag: ', data);
      },
      changeLog: (data: IBaseHandleEventData<'change'>) => {
        console.warn('change: ', data);
      },
      updateLog: (data: IUpdateEventData) => {
        console.warn('update: ', data);
      },
      beforeValueChangeLog: (data: IBeforeValueChangeEventData) => {
        console.warn('beforeValueChange: ', data);
      },
      valueChangeLog: (data: IValueChangeEventData) => {
        console.warn('valueChange: ', data);
      }
    },
    template: `
      <ng-round-slider
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
