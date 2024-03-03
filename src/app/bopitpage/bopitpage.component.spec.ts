import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BopitpageComponent } from './bopitpage.component';

describe('BopitpageComponent', () => {
  let component: BopitpageComponent;
  let fixture: ComponentFixture<BopitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BopitpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BopitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
