import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingComponent } from './nursing.component';

describe('NursingComponent', () => {
  let component: NursingComponent;
  let fixture: ComponentFixture<NursingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
