import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateServiceV1Component } from './state-service-v1.component';

describe('StateServiceV1Component', () => {
  let component: StateServiceV1Component;
  let fixture: ComponentFixture<StateServiceV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateServiceV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateServiceV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
