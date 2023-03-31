import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistSearchComponent } from './scientist-search.component';

describe('ScientistSearchComponent', () => {
  let component: ScientistSearchComponent;
  let fixture: ComponentFixture<ScientistSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
