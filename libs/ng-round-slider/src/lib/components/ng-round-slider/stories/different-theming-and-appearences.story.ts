import { Story } from '../ng-round-slider.component.stories';

export const DifferentThemingAndAppearancesStory: Story = {
  name: 'Different Theming and Appearances',
  render: () => ({
    styles: [
      '.wrapper { display: grid; gap: 15px; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr);}',

      '.appearance1 ::ng-deep .rs-range-color { background-color: #5673E7; }',
      '.appearance1 ::ng-deep .rs-path-color { background-color: #dedede; }',
      '.appearance1 ::ng-deep .rs-handle { background-color: #000000; }',
      '.appearance1 ::ng-deep .rs-border { border-color: white; }',

      '.appearance2 ::ng-deep .rs-range-color { background-color: #ff8d00; }',
      '.appearance2 ::ng-deep .rs-handle::after { background-color: #000000; }',
      '.appearance2 ::ng-deep .rs-border { border-color: #ff8d00; }',

      '.appearance3 ::ng-deep .rs-range-color { background-color: #33B5E5; }',
      '.appearance3 ::ng-deep .rs-path-color { background-color: #C2E9F7; }',
      '.appearance3 ::ng-deep .rs-handle { background-color: #C2E9F7; padding: 7px; border: 2px solid #C2E9F7; }',
      '.appearance3 ::ng-deep .rs-handle.rs-focus { border-color: #33B5E5; }',
      '.appearance3 ::ng-deep .rs-handle::after { border-color: #33B5E5; background-color: #33B5E5; }',
      '.appearance3 ::ng-deep .rs-border { border-color: transparent; }',

      '.appearance4 ::ng-deep .rs-range-color { background: radial-gradient(ellipse at bottom, rgba(0, 0, 0, 1) 0%, rgba(48, 7, 36, 1) 34%, rgba(255, 255, 255, 1) 66%, rgba(0, 0, 0, 1) 100%); }',
      '.appearance4 ::ng-deep .rs-path-color { background: radial-gradient(ellipse at bottom, rgba(255, 255, 255, 1) 0%, rgba(169, 173, 174, 1) 34%, rgba(255, 255, 255, 1) 66%, rgba(5, 0, 0, 1) 100%); }',
      '.appearance4 ::ng-deep .rs-handle { background: radial-gradient(ellipse at center, rgba(228, 228, 228, 1) 0%, rgba(179, 179, 179, 1) 34%, rgb(102, 91, 98) 100%); }',
      '.appearance4 ::ng-deep .rs-border { border-color: white; }',

      '.appearance5 ::ng-deep .rs-range-color { background-color: #00FFF5; }',
      '.appearance5 ::ng-deep .rs-path-color { background-color: #382d5f; border-radius: 0; }',
      '.appearance5 ::ng-deep .rs-handle { background-color: #00FFF5; }',
      '.appearance5 ::ng-deep .rs-border { border: 8px solid #382d5f; }',

      '.appearance6 ::ng-deep .rs-range-color { background-color: black; }',
      '.appearance6 ::ng-deep .rs-handle { background-color: #fff; border: 5px solid black; }',

      '.appearance7 ::ng-deep .rs-range-color { background: black; }',
      '.appearance7 ::ng-deep .rs-handle { background: black; margin-left: 0 !important; }',
      '.appearance7 ::ng-deep .rs-border { border-width: 0px; }',
      '.appearance7 ::ng-deep .rs-border.rs-outer { border: 14px solid #aaa; }',

      '.appearance8 ::ng-deep .rs-handle { background: black; margin-left: 0 !important; }',
      '.appearance8 ::ng-deep .rs-border.rs-inner { border-width: 0px; }',
      '.appearance8 ::ng-deep .rs-border.rs-outer { border: 16px dotted #61A9DC; }',
    ],
    template: `
      <div class="wrapper">
        <ng-round-slider
          class="appearance1"
          sliderType="min-range"
          handleSize="24,12"
          handleShape="square"
          [radius]="80"
          [value]="40"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance2"
          sliderType="min-range"
          handleSize="+8"
          handleShape="dot"
          [width]="14"
          [radius]="80"
          [value]="40"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance3"
          sliderType="min-range"
          handleSize="+16"
          handleShape="dot"
          [width]="8"
          [radius]="80"
          [value]="65"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance4"
          sliderType="min-range"
          handleSize="+0"
          [width]="22"
          [radius]="80"
          [value]="55"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance5"
          sliderType="range"
          handleSize="+10"
          value="10,60"
          [width]="10"
          [radius]="90"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance6"
          sliderType="min-range"
          handleSize="+8"
          [width]="9"
          [radius]="80"
          [value]="40"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance7"
          sliderType="range"
          handleSize="+0"
          value="5,55"
          [width]="14"
          [radius]="90"
        ></ng-round-slider>

        <ng-round-slider
          class="appearance8"
          handleShape="square"
          [handleSize]="16"
          [value]="29"
          [width]="0"
          [radius]="90"
        ></ng-round-slider>
      </div>
    `,
  }),
};