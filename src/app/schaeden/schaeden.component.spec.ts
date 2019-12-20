import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchaedenComponent } from './schaeden.component';

describe('SchaedenComponent', () => {
  let component: SchaedenComponent;
  let fixture: ComponentFixture<SchaedenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchaedenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchaedenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
