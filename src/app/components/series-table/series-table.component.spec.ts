import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTableComponent } from './series-table.component';

describe('SeriesTableComponent', () => {
  let component: SeriesTableComponent;
  let fixture: ComponentFixture<SeriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
