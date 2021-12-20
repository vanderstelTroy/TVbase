import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedShowsComponent } from './saved-shows.component';

describe('SavedShowsComponent', () => {
  let component: SavedShowsComponent;
  let fixture: ComponentFixture<SavedShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
