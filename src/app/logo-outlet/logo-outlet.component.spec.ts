import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoOutletComponent } from './logo-outlet.component';

describe('LogoOutletComponent', () => {
  let component: LogoOutletComponent;
  let fixture: ComponentFixture<LogoOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
