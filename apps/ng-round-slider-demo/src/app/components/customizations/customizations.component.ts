import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBaseMoveEventData, NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'customizations',
  standalone: true,
  imports: [NgRoundSliderComponent],
  templateUrl: './customizations.component.html',
  styleUrl: './customizations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizationsComponent {
  public formatting1(data: IBaseMoveEventData<'tooltipFormat'>): string {
    const months: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[<number>data.value];
  }

  public formatting2(data: IBaseMoveEventData<'tooltipFormat'>): string {
    return '$ ' + data.value;
  }
}
