import { IBaseMoveEventData } from '@ng-round-slider/lib/models/interfaces';
import { Story } from '../ng-round-slider.component.stories';

export const HandleShapesStory: Story = {
  name: 'Custom Handle Shapes',
  render: () => ({
    styles: [
      '.wrapper { display: flex; justify-content: space-evenly; overflow-y: hidden; }',
      '.slider1 ::ng-deep .rs-handle { background-color: transparent; border: 8px solid transparent; border-right-color: black; margin: -6px 0px 0px 14px !important; border-width: 6px 104px 6px 4px; }',
      '.slider1 ::ng-deep .rs-handle:before { display: block; content: " "; position: absolute; height: 22px; width: 22px; background: black; right: -11px; bottom: -11px; border-radius: 100px; }',
      '.slider1 ::ng-deep .rs-tooltip { top: 75%; font-size: 11px; }',
      '.slider1 ::ng-deep .rs-tooltip > div { text-align: center; background: orange; color: white; border-radius: 4px; padding: 1px 5px 2px; margin-top: 4px; }',
      '.slider1 ::ng-deep .rs-range-color { background-color: #DB5959; }',
      '.slider1 ::ng-deep .rs-path-color { background-color: #F0C5C5; }',

      '.slider2 ::ng-deep .rs-handle { background-color: transparent; border: 8px solid transparent; border-right-color: black; margin: -8px 0 0 14px !important; }',
      '.slider2 ::ng-deep .rs-handle:before { display: block; content: " "; position: absolute; height: 12px; width: 12px; background: black; right: -6px; bottom: -6px; border-radius: 100%; }',
      '.slider2 ::ng-deep .rs-handle:after { display: block; content: " "; width: 106px; position: absolute; top: -1px; right: 0px; border-top: 2px dotted black; }',  
      '.slider2 ::ng-deep .rs-range-color { background-color: #8832cd; }',  
      '.slider2 ::ng-deep .rs-path-color { background-color: #ddc5f0; }',  
    ],
    props: {
      formatting1: (data: IBaseMoveEventData<'tooltipFormat'>) => {
        const value: number = <number>data.value;
        let speed: string | undefined = undefined;
        if (value < 20) speed = 'Slow';
        else if (value < 40) speed = 'Normal';
        else if (value < 70) speed = 'Speed';
        else speed = 'Very Speed';

        return value + ' km/h' + '<div>' + speed + '<div>';
      },
      formatting2: (data: IBaseMoveEventData<'tooltipFormat'>) => {
        return '$ ' + data.value;
      }
    },
    template: `
      <div class="wrapper">
        <ng-round-slider
          class="slider1"
          sliderType="min-range"
          circleShape="pie"
          handleShape="square"
          [handleSize]="0"
          [editableTooltip]="false"
          [width]="16"
          [radius]="105"
          [value]="75"
          [startAngle]="315"
          [tooltipFormat]="formatting1"
        ></ng-round-slider>

        <ng-round-slider
          class="slider2"
          sliderType="min-range"
          circleShape="half-top"
          handleShape="square"
          [handleSize]="0"
          [showTooltip]="false"
          [radius]="130"
          [width]="16"
          [value]="75"
        ></ng-round-slider>

        
      </div>
    `,
  }),
};