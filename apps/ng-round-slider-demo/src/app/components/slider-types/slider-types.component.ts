import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'slider-types',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './slider-types.component.html',
  styleUrl: './slider-types.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderTypesComponent {}
