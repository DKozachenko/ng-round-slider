import { Story } from '../ng-round-slider.component.stories';

export const CircleShapesStory: Story = {
  name: 'Various Circle Shapes',
  render: () => ({
    styles: [
      '.wrapper { display: grid; gap: 15px; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr); }',
    ],
    template: `
      <div class="wrapper">
        <ng-round-slider
          sliderType="min-range"
          circleShape="quarter-top-left"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="quarter-top-right"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="quarter-bottom-left"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="quarter-bottom-right"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="half-top"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="half-bottom"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="half-left"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="half-right"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="pie"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
          [startAngle]="315"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="custom-half"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
          [startAngle]="315"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          circleShape="custom-quarter"
          [showTooltip]="false"
          [radius]="80"
          [value]="50"
          [startAngle]="315"
        ></ng-round-slider>
      </div>
    `,
  }),
};
