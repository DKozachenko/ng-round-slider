import type { Meta, StoryObj } from '@storybook/angular';
import { HandlerFunction, action } from '@storybook/addon-actions';
import {
  IBaseEventData,
  IBaseHandleEventData,
  IBaseMoveEventData,
  IBeforeValueChangeEventData,
  IUpdateEventData,
  IValueChangeEventData,
} from '../../models/interfaces';
import { DEFAULT_PROPERTIES_OPTIONS } from '../../models/constants';
import { NgRoundSliderComponent } from './ng-round-slider.component';

const meta: Meta<NgRoundSliderComponent> = {
  component: NgRoundSliderComponent,
  title: 'NgRoundSliderComponent',
  tags: ['autodocs'],
  args: {
    animation: DEFAULT_PROPERTIES_OPTIONS['animation'],
    width: DEFAULT_PROPERTIES_OPTIONS['width'],
    circleShape: DEFAULT_PROPERTIES_OPTIONS['circleShape'],
    disabled: DEFAULT_PROPERTIES_OPTIONS['disabled'],
    editableTooltip: DEFAULT_PROPERTIES_OPTIONS['editableTooltip'],
    endAngle: DEFAULT_PROPERTIES_OPTIONS['endAngle'],
    handleSize: DEFAULT_PROPERTIES_OPTIONS['handleSize'],
    handleShape: DEFAULT_PROPERTIES_OPTIONS['handleShape'],
    keyboardAction: DEFAULT_PROPERTIES_OPTIONS['keyboardAction'],
    lineCap: DEFAULT_PROPERTIES_OPTIONS['lineCap'],
    max: DEFAULT_PROPERTIES_OPTIONS['max'],
    min: DEFAULT_PROPERTIES_OPTIONS['min'],
    mouseScrollAction: DEFAULT_PROPERTIES_OPTIONS['mouseScrollAction'],
    radius: DEFAULT_PROPERTIES_OPTIONS['radius'],
    readOnly: DEFAULT_PROPERTIES_OPTIONS['readOnly'],
    showTooltip: DEFAULT_PROPERTIES_OPTIONS['showTooltip'],
    sliderType: DEFAULT_PROPERTIES_OPTIONS['sliderType'],
    startAngle: DEFAULT_PROPERTIES_OPTIONS['startAngle'],
    startValue: DEFAULT_PROPERTIES_OPTIONS['startValue'],
    step: DEFAULT_PROPERTIES_OPTIONS['step'],
    value: DEFAULT_PROPERTIES_OPTIONS['value'],
    svgMode: DEFAULT_PROPERTIES_OPTIONS['svgMode'],
    borderWidth: DEFAULT_PROPERTIES_OPTIONS['borderWidth'],
    borderColor: DEFAULT_PROPERTIES_OPTIONS['borderColor'],
    pathColor: DEFAULT_PROPERTIES_OPTIONS['pathColor'],
    rangeColor: DEFAULT_PROPERTIES_OPTIONS['rangeColor'],
    tooltipColor: DEFAULT_PROPERTIES_OPTIONS['tooltipColor'],
  },
  argTypes: {
    animation: {
      name: 'animation',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['animation'],
      description: `Enables or disables the handle movement animation.
      As the control uses the CSS3 animation, so you can use any CSS3 transition effects to customize the animation type and speed. 
      To know how to use custom animation check <a href="https://roundsliderui.com/demos.html#custom-animation">here</a>.`,
      control: {
        type: 'boolean',
      },
    },
    width: {
      name: 'width',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['width'],
      description: `Indicates the width (or thickness) of the slider.`,
      control: {
        type: 'number',
      },
    },
    circleShape: {
      name: 'circleShape',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['circleShape'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['disabled'],
      description: `Sets the disable state or enable state of the control. 
      While the control in the disable state we can't interact with this.
      And in disable mode the control looks like in the blured state.`,
      control: {
        type: 'boolean',
      },
    },
    editableTooltip: {
      name: 'editableTooltip',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['editableTooltip'],
      description: `Enables the editable option of tooltip. When this property set as true, 
      we can change the value by editing the tooltip.`,
      control: {
        type: 'boolean',
      },
    },
    endAngle: {
      name: 'endAngle',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['endAngle'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['handleSize'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['handleShape'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['keyboardAction'],
      description: `Enables or disables the keyboard functionality.
      The slider value can be changed through the keyboard by using the arrow keys (Up, Down, Left, Right) and Home, Down keys.`,
      control: {
        type: 'boolean',
      },
    },
    lineCap: {
      name: 'lineCap',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['lineCap'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['max'],
      description: `The max property indicates the maximum value of the slider.`,
      control: {
        type: 'number',
      },
    },
    min: {
      name: 'min',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['min'],
      description: `The min property indicates the minimum value of the slider.`,
      control: {
        type: 'number',
      },
    },
    mouseScrollAction: {
      name: 'mouseScrollAction',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['mouseScrollAction'],
      description: `Enables or disables the mouse scroll functionality.
      The slider value can be changed through the mouse scrolling.`,
      control: {
        type: 'number',
      },
    },
    radius: {
      name: 'radius',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['radius'],
      description: `The radius property indicates the radius of the slider's circle.
      Note : The height and width of the control considered as (2 * radius).`,
      control: {
        type: 'number',
      },
    },
    readOnly: {
      name: 'readOnly',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['readOnly'],
      description: `This enables the control into the readOnly mode, so we can can't interact with the control when readOnly enabled.`,
      control: {
        type: 'boolean',
      },
    },
    showTooltip: {
      name: 'showTooltip',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['showTooltip'],
      description: `Enables or disables the tooltip inside the slider.`,
      control: {
        type: 'boolean',
      },
    },
    sliderType: {
      name: 'sliderType',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['sliderType'],
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
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['startAngle'],
      description: `Indicates the starting point of the slider.
      The startAngle property is applicable for "full", "custom-half", "custom-quarter" and "pie" circle shapes only.`,
      control: {
        type: 'number',
      },
    },
    startValue: {
      name: 'startValue',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['startValue'],
      description: `This property decides at which point the slider should start. Otherwise, by default the slider starts with min value.
      This is mainly used for min-range slider, where you can customize the min-range start position.`,
      control: {
        type: 'number',
      },
    },
    step: {
      name: 'step',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['step'],
      description: `Decides the number of steps or value should take while we move the handle.`,
      control: {
        type: 'number',
      },
    },
    value: {
      name: 'value',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['value'],
      description: `Sets or gets the value of the slider.
      For default and min-range slider the property allows a single value (ex: value - 10).
      For range slider the property allows two values separated by comma (ex: value - "30,60").`,
      control: {
        type: 'number',
      },
    },
    svgMode: {
      name: 'svgMode',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['svgMode'],
      description: `This will enables the slider into the SVG mode.
      Through SVG mode you can do a lot of customization, and it will resolve all the legacy issues.
      Note : It is recommended to use the SVG mode for better usability and customization.`,
      control: {
        type: 'boolean',
      },
    },
    borderWidth: {
      name: 'borderWidth',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['borderWidth'],
      description: `Indicates the border width of the slider.
      Note : This is only applicable for <a href="https://roundsliderui.com/document.html#svgMode">SVG mode</a>.`,
      control: {
        type: 'number',
      },
    },
    borderColor: {
      name: 'borderColor',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['borderColor'],
      description: `Sets the border color of the slider.`,
      control: {
        type: 'color',
      },
    },
    pathColor: {
      name: 'pathColor',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['pathColor'],
      description: `Sets the path color of the slider.`,
      control: {
        type: 'color',
      },
    },
    rangeColor: {
      name: 'rangeColor',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['rangeColor'],
      description: `Sets the range color of the slider.`,
      control: {
        type: 'color',
      },
    },
    tooltipColor: {
      name: 'tooltipColor',
      defaultValue: DEFAULT_PROPERTIES_OPTIONS['tooltipColor'],
      description: `Sets the tooltip color of the slider.`,
      control: {
        type: 'color',
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
        [width]="width"
        [circleShape]="circleShape"
        [disabled]="disabled"
        [editableTooltip]="editableTooltip"
        [endAngle]="endAngle"
        [handleSize]="handleSize"
        [handleShape]="handleShape"
        [keyboardAction]="keyboardAction"
        [lineCap]="lineCap"
        [max]="max"
        [min]="min"
        [mouseScrollAction]="mouseScrollAction"
        [radius]="radius"
        [readOnly]="readOnly"
        [showTooltip]="showTooltip"
        [sliderType]="sliderType"
        [startAngle]="startAngle"
        [startValue]="startValue"
        [step]="step"
        [value]="value"
        [svgMode]="svgMode"
        [borderWidth]="borderWidth"
        [borderColor]="borderColor"
        [pathColor]="pathColor"
        [rangeColor]="rangeColor"
        [tooltipColor]="tooltipColor"
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
