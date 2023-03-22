import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistDetailComponent } from './scientist-detail.component';

describe('ScientistDetailComponent', () => {
  let component: ScientistDetailComponent;
  let fixture: ComponentFixture<ScientistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
