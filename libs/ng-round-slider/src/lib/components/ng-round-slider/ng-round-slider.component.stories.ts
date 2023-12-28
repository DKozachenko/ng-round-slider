import type { Meta, StoryObj } from '@storybook/angular';
import { NgRoundSliderComponent } from './ng-round-slider.component';
import { IBeforeCreateData } from '../../models/interfaces';

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
      beforeCreateLog: (data: IBeforeCreateData) => {
        console.warn('beforeCreate: ', data,);
      }
    },
    template: `
      Test
      <ng-round-slider (beforeCreate)="beforeCreateLog($event)" [value]="value"></ng-round-slider>
    `,
  }),
};
