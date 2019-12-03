import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMComponent } from './registrar-m.component';

describe('RegistrarMComponent', () => {
  let component: RegistrarMComponent;
  let fixture: ComponentFixture<RegistrarMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
