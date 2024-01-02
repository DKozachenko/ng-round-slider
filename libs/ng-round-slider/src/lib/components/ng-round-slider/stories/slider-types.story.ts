import { Story } from '../ng-round-slider.component.stories';

export const SliderTypesStory: Story = {
  name: 'Various Slider Types',
  render: () => ({
    styles: ['.wrapper { display: flex; justify-content: space-between; }'],
    template: `
      <div class="wrapper">
        <ng-round-slider
          sliderType="default"
          [radius]="85"
          [value]="40"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="min-range"
          [radius]="85"
          [value]="40"
        ></ng-round-slider>

        <ng-round-slider
          sliderType="range"
          value="10,40"
          [radius]="85"
        ></ng-round-slider>
      </div>
    `,
  }),
};
