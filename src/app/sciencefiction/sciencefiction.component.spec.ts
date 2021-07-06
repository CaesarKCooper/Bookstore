import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencefictionComponent } from './sciencefiction.component';

describe('SciencefictionComponent', () => {
  let component: SciencefictionComponent;
  let fixture: ComponentFixture<SciencefictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencefictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencefictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
