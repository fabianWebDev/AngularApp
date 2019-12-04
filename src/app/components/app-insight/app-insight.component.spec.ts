import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInsightComponent } from './app-insight.component';

describe('AppInsightComponent', () => {
  let component: AppInsightComponent;
  let fixture: ComponentFixture<AppInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
