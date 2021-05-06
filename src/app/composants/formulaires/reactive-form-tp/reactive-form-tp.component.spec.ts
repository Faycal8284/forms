import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTpComponent } from './reactive-form-tp.component';

describe('ReactiveFormTpComponent', () => {
  let component: ReactiveFormTpComponent;
  let fixture: ComponentFixture<ReactiveFormTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormTpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
