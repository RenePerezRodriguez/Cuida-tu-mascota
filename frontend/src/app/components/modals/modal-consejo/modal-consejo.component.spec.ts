import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsejoComponent } from './modal-consejo.component';

describe('ModalConsejoComponent', () => {
  let component: ModalConsejoComponent;
  let fixture: ComponentFixture<ModalConsejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
