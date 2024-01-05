import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'properties',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesComponent {}
