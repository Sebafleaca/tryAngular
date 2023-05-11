import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ScientistDetailComponent } from './scientist-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ScientistDetailComponent', () => {
  let component: ScientistDetailComponent;
  let fixture: ComponentFixture<ScientistDetailComponent>;
  let h3: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        RouterModule.forRoot([])
      ],
      declarations: [ ScientistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('expect right title, with querySelector()', () => {
    h3 = fixture.nativeElement.querySelector('#title');
    expect(h3.textContent).toContain('Details');
  })

  it('expect title to be blue, with By.css()', () => {
    let css: DebugElement = fixture.debugElement.query(By.css('#title'));
    let p: HTMLElement = css.nativeElement;
    expect(p.getAttribute('style')).toContain('blue');
  })
});
