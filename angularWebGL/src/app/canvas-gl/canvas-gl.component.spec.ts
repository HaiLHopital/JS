import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasGLComponent } from './canvas-gl.component';

describe('CanvasGLComponent', () => {
  let component: CanvasGLComponent;
  let fixture: ComponentFixture<CanvasGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasGLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
