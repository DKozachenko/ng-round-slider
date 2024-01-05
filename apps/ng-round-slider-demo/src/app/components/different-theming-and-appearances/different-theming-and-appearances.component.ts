import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'different-theming-and-appearances',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './different-theming-and-appearances.component.html',
  styleUrl: './different-theming-and-appearances.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferentThemingAndAppearancesComponent {}
