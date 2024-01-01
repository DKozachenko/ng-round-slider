import { IBaseEventData } from '@ng-round-slider/lib/models/interfaces';
import { Story } from '../ng-round-slider.component.stories';

export const EventsStory: Story = {
  name: 'Events',
  render: () => ({
    styles: [
      '.wrapper { display: flex; }',
      '.events-log { margin-left: 150px; max-height: 260px; overflow-y: auto; width: 100%; border: 1px solid black; padding-inline: 10px; }',
      '.slider ::ng-deep .rs-focus { box-shadow: 0 0 20px -3px #797979 inset; }',
      '.slider ::ng-deep .rs-handle-dot { padding: 7px; }'
    ],
    props: {
      events: [],
      logEvent: (events: IBaseEventData<string>[], event: IBaseEventData<string>) => {
        events.push(event);
      }
    },
    template: `
      <div class="wrapper">
        <ng-round-slider
          class="slider"
          sliderType="range"
          handleShape="dot"
          value="20,45"
          [radius]="130"
          [width]="25"
          (beforeCreate)="logEvent(events, $event)"
          (create)="logEvent(events, $event)"
          (start)="logEvent(events, $event)"
          (stop)="logEvent(events, $event)"
          (drag)="logEvent(events, $event)"
          (change)="logEvent(events, $event)"
        ></ng-round-slider>

        <div class="events-log">
          <p *ngFor="let event of events"><b>{{ event.type }}</b> event triggered</p>
        </div>
      </div>
    `,
  }),
};