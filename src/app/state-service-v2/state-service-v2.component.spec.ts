import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateServiceV2Component } from './state-service-v2.component';

describe('StateServiceV2Component', () => {
  let component: StateServiceV2Component;
  let fixture: ComponentFixture<StateServiceV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateServiceV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateServiceV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
