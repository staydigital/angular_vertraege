import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertraegeComponent } from './vertraege.component';

describe('VertraegeComponent', () => {
  let component: VertraegeComponent;
  let fixture: ComponentFixture<VertraegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertraegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
