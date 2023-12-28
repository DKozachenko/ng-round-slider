import { CircleShape } from './circle-shape.type';
import { HandleShape } from './handle-shape.type';
import { LineCap } from './line-cap.type';
import { SliderType } from './slider-type.type';

export type SliderPropertyValue =
  | string
  | number
  | boolean
  | CircleShape
  | HandleShape
  | LineCap
  | SliderType
  | null;
