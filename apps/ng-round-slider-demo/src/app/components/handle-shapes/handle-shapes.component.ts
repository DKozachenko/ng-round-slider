import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBaseMoveEventData, NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'handle-shapes',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './handle-shapes.component.html',
  styleUrl: './handle-shapes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandleShapesComponent {
  public formatting1(data: IBaseMoveEventData<'tooltipFormat'>): string {
    const value: number = <number>data.value;
    let speed: string | undefined = undefined;
    if (value < 20) speed = 'Slow';
    else if (value < 40) speed = 'Normal';
    else if (value < 70) speed = 'Speed';
    else speed = 'Very Speed';

    return value + ' km/h' + '<div>' + speed + '<div>';
  }

  public formatting2(data: IBaseMoveEventData<'tooltipFormat'>): string {
    return '$ ' + data.value;
  }
}
