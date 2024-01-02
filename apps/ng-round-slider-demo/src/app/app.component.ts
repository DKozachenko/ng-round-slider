import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgRoundSliderComponent } from '@ng-round-slider';

@Component({
  standalone: true,
  imports: [RouterModule, NgRoundSliderComponent],
  selector: 'ng-round-slider-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ng-round-slider-demo';
}
