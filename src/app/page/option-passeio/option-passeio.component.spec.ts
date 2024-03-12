import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPasseioComponent } from './option-passeio.component';

describe('OptionPasseioComponent', () => {
  let component: OptionPasseioComponent;
  let fixture: ComponentFixture<OptionPasseioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionPasseioComponent]
    });
    fixture = TestBed.createComponent(OptionPasseioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
