import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CircleShapesComponent,
  CustomizationsComponent,
  DifferentThemingAndAppearancesComponent,
  EventsComponent,
  HandleShapesComponent,
  PropertiesComponent,
  SliderTypesComponent,
} from './components';

@Component({
  standalone: true,
  imports: [
    SliderTypesComponent,
    CircleShapesComponent,
    DifferentThemingAndAppearancesComponent,
    HandleShapesComponent,
    PropertiesComponent,
    EventsComponent,
    CustomizationsComponent,
  ],
  selector: 'ng-round-slider-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
