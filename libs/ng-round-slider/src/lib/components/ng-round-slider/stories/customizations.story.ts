import { Story } from '../ng-round-slider.component.stories';

export const CustomTooltipStory: Story = {
  name: 'Custom Tooltip',
  render: () => ({
    styles: [
      '.wrapper { display: flex; }',
      '.slider1 { height: 160px !important; overflow: hidden; padding: 10px; }',
      '.slider1 ::ng-deep .rs-container { left: 50%; margin-left: -300px; }',
      '.slider1 ::ng-deep .rs-tooltip { top: 100px; }',

      '.slider2 ::ng-deep .rs-path-color { background-color: #939393; }',
      '.slider2 ::ng-deep .rs-handle { background-color: orange; }',
    ],
    template: `
      <div class="wrapper">
        <ng-round-slider
          class="slider1"
          sliderType="min-range"
          circleShape="custom-quarter"
          handleShape="dot"
          [min]="0"
          [max]="11"
          [value]="7"
          [startAngle]="45"
          [editableTooltip]="false"
          [radius]="300"
          [width]="20"
        ></ng-round-slider>

        <ng-round-slider
          class="slider2"
          handleSize="+14"
          [value]="50"
          [radius]="90"
          [width]="4"
        ></ng-round-slider>
      </div>
    `,
  }),
};

export const CustomAnimationStory: Story = {
  name: 'Custom Animation',
  render: () => ({
    styles: [
      '.slider ::ng-deep .rs-animation .rs-transition { transition-timing-function: cubic-bezier(1.000, -0.530, 0.405, 1.425); }',
    ],
    template: `
      <div class="wrapper">
        <ng-round-slider
          class="slider"
          sliderType="min-range"
          [value]="40"
          [radius]="90"
          [width]="16"
        ></ng-round-slider>
      </div>
    `,
  }),
};