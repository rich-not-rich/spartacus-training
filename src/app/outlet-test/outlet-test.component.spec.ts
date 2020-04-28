import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTestComponent } from './outlet-test.component';

describe('OutletTestComponent', () => {
  let component: OutletTestComponent;
  let fixture: ComponentFixture<OutletTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
