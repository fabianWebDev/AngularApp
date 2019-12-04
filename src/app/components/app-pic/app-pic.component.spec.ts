import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPicComponent } from './app-pic.component';

describe('AppPicComponent', () => {
  let component: AppPicComponent;
  let fixture: ComponentFixture<AppPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
