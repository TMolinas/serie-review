import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTableLineComponent } from './series-table-line.component';

describe('SeriesTableLineComponent', () => {
  let component: SeriesTableLineComponent;
  let fixture: ComponentFixture<SeriesTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
