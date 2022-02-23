import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmediaComponent } from './newsmedia.component';

describe('NewsmediaComponent', () => {
  let component: NewsmediaComponent;
  let fixture: ComponentFixture<NewsmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
