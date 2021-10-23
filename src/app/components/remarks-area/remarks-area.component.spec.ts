import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksAreaComponent } from './remarks-area.component';

describe('RemarksAreaComponent', () => {
  let component: RemarksAreaComponent;
  let fixture: ComponentFixture<RemarksAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarksAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
