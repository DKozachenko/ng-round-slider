import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'circle-shapes',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './circle-shapes.component.html',
  styleUrl: './circle-shapes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleShapesComponent {}
