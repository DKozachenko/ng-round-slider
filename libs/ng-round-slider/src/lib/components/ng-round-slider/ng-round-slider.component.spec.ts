import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRoundSliderComponent } from './ng-round-slider.component';

describe('NgRoundSliderComponent', () => {
  let component: NgRoundSliderComponent;
  let fixture: ComponentFixture<NgRoundSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRoundSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgRoundSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
