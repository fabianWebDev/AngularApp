import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoverComponent } from './app-rover.component';

describe('AppRoverComponent', () => {
  let component: AppRoverComponent;
  let fixture: ComponentFixture<AppRoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
