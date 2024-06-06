import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedDataPage } from './saved-data.page';

describe('SavedDataPage', () => {
  let component: SavedDataPage;
  let fixture: ComponentFixture<SavedDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
