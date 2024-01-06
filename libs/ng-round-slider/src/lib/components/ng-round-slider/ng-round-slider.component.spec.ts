import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRoundSliderComponent } from './ng-round-slider.component';
import { DEFAULT_PROPERTIES_VALUES } from '../../models/constants';
import { CircleShape } from '../../models/types';

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

  it('should initialize correct id', () => {
    expect(component.id).toMatch(/^round-slider-[a-z0-9-]+$/);
  });

  it('should initialize correct default values', () => {
    expect(component.animation).toBe(DEFAULT_PROPERTIES_VALUES['animation']);
    expect(component.width).toBe(DEFAULT_PROPERTIES_VALUES['width']);
    expect(component.circleShape).toBe(DEFAULT_PROPERTIES_VALUES['circleShape']);
    expect(component.disabled).toBe(DEFAULT_PROPERTIES_VALUES['disabled']);
    expect(component.editableTooltip).toBe(DEFAULT_PROPERTIES_VALUES['editableTooltip']);
    expect(component.endAngle).toBe(DEFAULT_PROPERTIES_VALUES['endAngle']);
    expect(component.handleSize).toBe(DEFAULT_PROPERTIES_VALUES['handleSize']);
    expect(component.handleShape).toBe(DEFAULT_PROPERTIES_VALUES['handleShape']);
    expect(component.keyboardAction).toBe(DEFAULT_PROPERTIES_VALUES['keyboardAction']);
    expect(component.lineCap).toBe(DEFAULT_PROPERTIES_VALUES['lineCap']);
    expect(component.max).toBe(DEFAULT_PROPERTIES_VALUES['max']);
    expect(component.min).toBe(DEFAULT_PROPERTIES_VALUES['min']);
    expect(component.mouseScrollAction).toBe(DEFAULT_PROPERTIES_VALUES['mouseScrollAction']);
    expect(component.radius).toBe(DEFAULT_PROPERTIES_VALUES['radius']);
    expect(component.readOnly).toBe(DEFAULT_PROPERTIES_VALUES['readOnly']);
    expect(component.showTooltip).toBe(DEFAULT_PROPERTIES_VALUES['showTooltip']);
    expect(component.sliderType).toBe(DEFAULT_PROPERTIES_VALUES['sliderType']);
    expect(component.startAngle).toBe(DEFAULT_PROPERTIES_VALUES['startAngle']);
    expect(component.startValue).toBe(DEFAULT_PROPERTIES_VALUES['startValue']);
    expect(component.step).toBe(DEFAULT_PROPERTIES_VALUES['step']);
    expect(component.value).toBe(DEFAULT_PROPERTIES_VALUES['value']);
    expect(component.svgMode).toBe(DEFAULT_PROPERTIES_VALUES['svgMode']);
    expect(component.borderWidth).toBe(DEFAULT_PROPERTIES_VALUES['borderWidth']);
    expect(component.borderColor).toBe(DEFAULT_PROPERTIES_VALUES['borderColor']);
    expect(component.pathColor).toBe(DEFAULT_PROPERTIES_VALUES['pathColor']);
    expect(component.rangeColor).toBe(DEFAULT_PROPERTIES_VALUES['rangeColor']);
    expect(component.tooltipColor).toBe(DEFAULT_PROPERTIES_VALUES['tooltipColor']);
    expect(component.tooltipFormat).toBeNull();
  });

  it('should get and set property', () => {
    const newAnimation: boolean = false;
    const newCircleShape: CircleShape = 'half-top';
    const newEndAngle: number = 200;

    component.setProperty('animation', newAnimation);
    component.setProperty('circleShape', newCircleShape);
    component.setProperty('endAngle', newEndAngle);
    expect(component.getProperty('animation')).toBe(newAnimation);
    expect(component.getProperty('circleShape')).toBe(newCircleShape);
    expect(component.getProperty('endAngle')).toBe(newEndAngle);
  });

  it('should set value with "setValue" method', () => {
    const newValue: number = 87;

    component.setProperty('value', newValue);
    expect(component.getProperty('value')).toBe(newValue);
  });

  it('should get value with "getValue" method', () => {
    const newValue: number = 64;

    component.setValue(newValue);
    expect(component.getValue()).toBe(newValue);
  });

  it('should disable with "disable" method', () => {
    component.disable();
    expect(component.getProperty('disabled')).toBeTruthy();
  });

  it('should enable with "enable" method', () => {
    component.setProperty('disabled', true);
    component.enable();
    expect(component.getProperty('disabled')).toBeFalsy();
  });
});
