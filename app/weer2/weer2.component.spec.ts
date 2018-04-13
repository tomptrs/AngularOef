import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weer2Component } from './weer2.component';

describe('Weer2Component', () => {
  let component: Weer2Component;
  let fixture: ComponentFixture<Weer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
