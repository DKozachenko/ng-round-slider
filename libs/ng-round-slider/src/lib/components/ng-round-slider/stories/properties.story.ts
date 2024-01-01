import { Story } from '../ng-round-slider.component.stories';

export const PropertiesStory: Story = {
  name: 'Properties',
  render: () => ({
    styles: ['.wrapper { display: grid; gap: 15px; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr);}'],
    template: `
      <div class="wrapper">
        <ng-round-slider
          sliderType="min-range"
          [min]="1000"
          [max]="10000"
          [step]="1000"
          [value]="3000"
        ></ng-round-slider>

        <ng-round-slider
          handleShape="dot"
          handleSize="+10"
          [max]="10"
          [step]="0.1"
          [width]="10"
          [radius]="70"
          [value]="6"
        ></ng-round-slider>

        <ng-round-slider
          handleSize="34,10"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          handleShape="square"
          [editableTooltip]="false"
          [value]="30"
        ></ng-round-slider>

        <ng-round-slider
          endAngle="+225"
          [startAngle]="90"
          [value]="45"
        ></ng-round-slider>

        <ng-round-slider
          [mouseScrollAction]="true"
          [value]="15"
        ></ng-round-slider>
      </div>
    `,
  }),
};