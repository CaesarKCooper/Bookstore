import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedbookComponent } from './searchedbook.component';

describe('SearchedbookComponent', () => {
  let component: SearchedbookComponent;
  let fixture: ComponentFixture<SearchedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
