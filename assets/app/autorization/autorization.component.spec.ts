import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizationComponent } from './autorization.component';

describe('AutorizationComponent', () => {
  let component: AutorizationComponent;
  let fixture: ComponentFixture<AutorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
