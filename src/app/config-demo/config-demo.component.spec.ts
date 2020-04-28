import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDemoComponent } from './config-demo.component';

describe('ConfigDemoComponent', () => {
  let component: ConfigDemoComponent;
  let fixture: ComponentFixture<ConfigDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
