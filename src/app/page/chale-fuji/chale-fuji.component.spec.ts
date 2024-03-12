import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaleFujiComponent } from './chale-fuji.component';

describe('ChaleFujiComponent', () => {
  let component: ChaleFujiComponent;
  let fixture: ComponentFixture<ChaleFujiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaleFujiComponent]
    });
    fixture = TestBed.createComponent(ChaleFujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
