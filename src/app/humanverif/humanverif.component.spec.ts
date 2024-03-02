import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanverifComponent } from './humanverif.component';

describe('HumanverifComponent', () => {
  let component: HumanverifComponent;
  let fixture: ComponentFixture<HumanverifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanverifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanverifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
