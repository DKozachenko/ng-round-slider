import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseEventData, NgRoundSliderComponent } from 'ng-round-slider';

@Component({
  selector: 'events',
  standalone: true,
  imports: [NgRoundSliderComponent, NgFor],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  public events: IBaseEventData<string>[] = [];

  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  public trackByFunc(index: number): number {
    return index;
  }

  public logEvent(event: IBaseEventData<string>): void {
    this.events.push(event);
    this.cdr.detectChanges();
  }
}
