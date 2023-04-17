import { Component } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HoverDirective } from './hover.directive';

@Component({
  template: `<i [appHover]="'scale(1.2)'"></i>`,
})
class TestComponent {}

describe('HoverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new HoverDirective();
    expect(directive).toBeTruthy();
  });

  it('should scale when hover', fakeAsync(() => {
    const element: HTMLElement = fixture.nativeElement.querySelector('i');
    const event = new MouseEvent('mouseenter');

    element.dispatchEvent(event);
    tick();

    fixture.detectChanges();

    expect(element.style.transform).toEqual('scale(1.2)');
  }));
});
