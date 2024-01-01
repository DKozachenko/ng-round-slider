import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_PROPERTIES_VALUES } from '@constants';
import { NgRoundSliderComponent } from './ng-round-slider.component';
import { PrimaryStory, SliderTypesStory, CircleShapesStory, DifferentThemingAndAppearancesStory, PropertiesStory, EventsStory, CustomTooltipStory, CustomAnimationStory, HandleShapesStory } from './stories';

const meta: Meta<NgRoundSliderComponent> = {
  component: NgRoundSliderComponent,
  title: 'NgRoundSliderComponent',
  args: {
    animation: DEFAULT_PROPERTIES_VALUES['animation'],
    width: DEFAULT_PROPERTIES_VALUES['width'],
    circleShape: DEFAULT_PROPERTIES_VALUES['circleShape'],
    disabled: DEFAULT_PROPERTIES_VALUES['disabled'],
    editableTooltip: DEFAULT_PROPERTIES_VALUES['editableTooltip'],
    endAngle: DEFAULT_PROPERTIES_VALUES['endAngle'],
    handleSize: DEFAULT_PROPERTIES_VALUES['handleSize'],
    handleShape: DEFAULT_PROPERTIES_VALUES['handleShape'],
    keyboardAction: DEFAULT_PROPERTIES_VALUES['keyboardAction'],
    lineCap: DEFAULT_PROPERTIES_VALUES['lineCap'],
    max: DEFAULT_PROPERTIES_VALUES['max'],
    min: DEFAULT_PROPERTIES_VALUES['min'],
    mouseScrollAction: DEFAULT_PROPERTIES_VALUES['mouseScrollAction'],
    radius: DEFAULT_PROPERTIES_VALUES['radius'],
    readOnly: DEFAULT_PROPERTIES_VALUES['readOnly'],
    showTooltip: DEFAULT_PROPERTIES_VALUES['showTooltip'],
    sliderType: DEFAULT_PROPERTIES_VALUES['sliderType'],
    startAngle: DEFAULT_PROPERTIES_VALUES['startAngle'],
    startValue: DEFAULT_PROPERTIES_VALUES['startValue'],
    step: DEFAULT_PROPERTIES_VALUES['step'],
    value: DEFAULT_PROPERTIES_VALUES['value'],
    svgMode: DEFAULT_PROPERTIES_VALUES['svgMode'],
    borderWidth: DEFAULT_PROPERTIES_VALUES['borderWidth'],
    borderColor: DEFAULT_PROPERTIES_VALUES['borderColor'],
    pathColor: DEFAULT_PROPERTIES_VALUES['pathColor'],
    rangeColor: DEFAULT_PROPERTIES_VALUES['rangeColor'],
    tooltipColor: DEFAULT_PROPERTIES_VALUES['tooltipColor'],
    tooltipFormat: null
  },
  argTypes: {
    animation: {
      name: 'animation',
      defaultValue: DEFAULT_PROPERTIES_VALUES['animation'],
      description: `Enables or disables the handle movement animation.
      As the control uses the CSS3 animation, so you can use any CSS3 transition effects to customize the animation type and speed. 
      To know how to use custom animation check <a href="https://roundsliderui.com/demos.html#custom-animation">here</a>.`,
      control: {
        type: 'boolean',
      },
    },
    width: {
      name: 'width',
      defaultValue: DEFAULT_PROPERTIES_VALUES['width'],
      description: `Indicates the width (or thickness) of the slider.`,
      control: {
        type: 'number',
      },
    },
    circleShape: {
      name: 'circleShape',
      defaultValue: DEFAULT_PROPERTIES_VALUES['circleShape'],
      description: `Indicates the circle shape to be render. The available circle shapes are:
      * full, 
      * half-top
      * half-bottom
      * half-left
      * half-right
      * quarter-top-left
      * quarter-top-right
      * quarter-bottom-right
      * quarter-bottom-left
      * pie
      * custom-half
      * custom-quarter`,
      options: [
        'full', 
        'half-top', 
        'half-bottom', 
        'half-left', 
        'half-right', 
        'quarter-top-left', 
        'quarter-top-right', 
        'quarter-bottom-right', 
        'quarter-bottom-left',
        'pie',
        'custom-half',
        'custom-quarter',
      ],
      control: {
        type: 'select',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: DEFAULT_PROPERTIES_VALUES['disabled'],
      description: `Sets the disable state or enable state of the control. 
      While the control in the disable state we can't interact with this.
      And in disable mode the control looks like in the blured state.`,
      control: {
        type: 'boolean',
      },
    },
    editableTooltip: {
      name: 'editableTooltip',
      defaultValue: DEFAULT_PROPERTIES_VALUES['editableTooltip'],
      description: `Enables the editable option of tooltip. When this property set as true, 
      we can change the value by editing the tooltip.`,
      control: {
        type: 'boolean',
      },
    },
    endAngle: {
      name: 'endAngle',
      defaultValue: DEFAULT_PROPERTIES_VALUES['endAngle'],
      description: `Indicates the end point of the slider. Multiple format supported:
      * 180 : Sets the fixed value, where the endAngle is 180°.
      * "+180" : This is dependent to startAngle property. If the startAngle is 90° then the endAngle considered as 270°.
      * "-90" : This is also dependent to startAngle property. If the startAngle is 180° then the endAngle considered as 90°.
  The endAngle property is applicable for "full" circle shape only.`,
      control: {
        type: 'text',
      },
    },
    handleSize: {
      name: 'handleSize',
      defaultValue: DEFAULT_PROPERTIES_VALUES['handleSize'],
      description: `The handleSize property mentions the size of the handle. Multiple format supported:
      * 22 : Sets the fixed size, where the handle's height and width considered as 22.
      * "30,10" : Sets the fixed size, where the handle's height considered as 30 and width considered as 10.
      * "+4" : This is dependent to width property. If the width is 20 then the handleSize considered as 24.
      * "-4" : This is also dependent to width property. If the width is 20 then the handleSize considered as 16.`,
      control: {
        type: 'text',
      },
    },
    handleShape: {
      name: 'handleShape',
      defaultValue: DEFAULT_PROPERTIES_VALUES['handleShape'],
      description: `The handleShape property mentions the shape of the handle. Currently the following types are available:
      * round
      * dot
      * square
  In addition you can make your own handle shape by customizing this. Please check
  <a href="https://roundsliderui.com/demos.html#custom-handle-shape">here</a> for handle customization.`,
      options: [
        'round', 
        'dot', 
        'square',
      ],
      control: {
        type: 'select',
      },
    },
    keyboardAction: {
      name: 'keyboardAction',
      defaultValue: DEFAULT_PROPERTIES_VALUES['keyboardAction'],
      description: `Enables or disables the keyboard functionality.
      The slider value can be changed through the keyboard by using the arrow keys (Up, Down, Left, Right) and Home, Down keys.`,
      control: {
        type: 'boolean',
      },
    },
    lineCap: {
      name: 'lineCap',
      defaultValue: DEFAULT_PROPERTIES_VALUES['lineCap'],
      description: `The lineCap property mentions the shape at the end part of the path. 
      This is not applicable for the "full" circle shape, except this all other circle shapes supports lineCap.
      The possible inputs for this property is:
      * square
      * round
      * butt`,
      options: [
        'square',
        'round', 
        'butt', 
      ],
      control: {
        type: 'select',
      },
    },
    max: {
      name: 'max',
      defaultValue: DEFAULT_PROPERTIES_VALUES['max'],
      description: `The max property indicates the maximum value of the slider.`,
      control: {
        type: 'number',
      },
    },
    min: {
      name: 'min',
      defaultValue: DEFAULT_PROPERTIES_VALUES['min'],
      description: `The min property indicates the minimum value of the slider.`,
      control: {
        type: 'number',
      },
    },
    mouseScrollAction: {
      name: 'mouseScrollAction',
      defaultValue: DEFAULT_PROPERTIES_VALUES['mouseScrollAction'],
      description: `Enables or disables the mouse scroll functionality.
      The slider value can be changed through the mouse scrolling.`,
      control: {
        type: 'number',
      },
    },
    radius: {
      name: 'radius',
      defaultValue: DEFAULT_PROPERTIES_VALUES['radius'],
      description: `The radius property indicates the radius of the slider's circle.
      Note : The height and width of the control considered as (2 * radius).`,
      control: {
        type: 'number',
      },
    },
    readOnly: {
      name: 'readOnly',
      defaultValue: DEFAULT_PROPERTIES_VALUES['readOnly'],
      description: `This enables the control into the readOnly mode, so we can can't interact with the control when readOnly enabled.`,
      control: {
        type: 'boolean',
      },
    },
    showTooltip: {
      name: 'showTooltip',
      defaultValue: DEFAULT_PROPERTIES_VALUES['showTooltip'],
      description: `Enables or disables the tooltip inside the slider.`,
      control: {
        type: 'boolean',
      },
    },
    sliderType: {
      name: 'sliderType',
      defaultValue: DEFAULT_PROPERTIES_VALUES['sliderType'],
      description: `Indicates the slider type to be render. The available slider types are:
      * default
      * min-range
      * range`,
      options: [
        'default',
        'min-range', 
        'range', 
      ],
      control: {
        type: 'select',
      },
    },
    startAngle: {
      name: 'startAngle',
      defaultValue: DEFAULT_PROPERTIES_VALUES['startAngle'],
      description: `Indicates the starting point of the slider.
      The startAngle property is applicable for "full", "custom-half", "custom-quarter" and "pie" circle shapes only.`,
      control: {
        type: 'number',
      },
    },
    startValue: {
      name: 'startValue',
      defaultValue: DEFAULT_PROPERTIES_VALUES['startValue'],
      description: `This property decides at which point the slider should start. Otherwise, by default the slider starts with min value.
      This is mainly used for min-range slider, where you can customize the min-range start position.`,
      control: {
        type: 'number',
      },
    },
    step: {
      name: 'step',
      defaultValue: DEFAULT_PROPERTIES_VALUES['step'],
      description: `Decides the number of steps or value should take while we move the handle.`,
      control: {
        type: 'number',
      },
    },
    value: {
      name: 'value',
      defaultValue: DEFAULT_PROPERTIES_VALUES['value'],
      description: `Sets or gets the value of the slider.
      For default and min-range slider the property allows a single value (ex: value - 10).
      For range slider the property allows two values separated by comma (ex: value - "30,60").`,
      control: {
        type: 'number',
      },
    },
    svgMode: {
      name: 'svgMode',
      defaultValue: DEFAULT_PROPERTIES_VALUES['svgMode'],
      description: `This will enables the slider into the SVG mode.
      Through SVG mode you can do a lot of customization, and it will resolve all the legacy issues.
      Note : It is recommended to use the SVG mode for better usability and customization.`,
      control: {
        type: 'boolean',
      },
    },
    borderWidth: {
      name: 'borderWidth',
      defaultValue: DEFAULT_PROPERTIES_VALUES['borderWidth'],
      description: `Indicates the border width of the slider.
      Note : This is only applicable for <a href="https://roundsliderui.com/document.html#svgMode">SVG mode</a>.`,
      control: {
        type: 'number',
      },
    },
    borderColor: {
      name: 'borderColor',
      defaultValue: DEFAULT_PROPERTIES_VALUES['borderColor'],
      description: `Sets the border color of the slider.`,
      control: {
        type: 'color',
      },
    },
    pathColor: {
      name: 'pathColor',
      defaultValue: DEFAULT_PROPERTIES_VALUES['pathColor'],
      description: `Sets the path color of the slider.`,
      control: {
        type: 'color',
      },
    },
    rangeColor: {
      name: 'rangeColor',
      defaultValue: DEFAULT_PROPERTIES_VALUES['rangeColor'],
      description: `Sets the range color of the slider.`,
      control: {
        type: 'color',
      },
    },
    tooltipColor: {
      name: 'tooltipColor',
      defaultValue: DEFAULT_PROPERTIES_VALUES['tooltipColor'],
      description: `Sets the tooltip color of the slider.`,
      control: {
        type: 'color',
      },
    },
    tooltipFormat: {
      name: 'tooltipFormat',
      defaultValue: null,
      description: `This event will act as a callback. So you can customize the tooltip template by returning 
      with the custom values here. Check the below demo for better understanding:
      <a href="https://roundsliderui.com/demos.html#custom-tooltip">Custom Tooltip</a>`,
      control: false
    }
  },
};
export default meta;
export type Story = StoryObj<NgRoundSliderComponent>;

export const Primary: Story = PrimaryStory;
export const SliderTypes: Story = SliderTypesStory;
export const CircleShapes: Story = CircleShapesStory;
export const DifferentThemingAndAppearances: Story = DifferentThemingAndAppearancesStory;
export const HandleShapes: Story = HandleShapesStory;
export const Properties: Story = PropertiesStory;
export const Events: Story = EventsStory;
export const CustomTooltip: Story = CustomTooltipStory;
export const CustomAnimation: Story = CustomAnimationStory;