import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalHPage } from './modal-h.page';

describe('ModalHPage', () => {
  let component: ModalHPage;
  let fixture: ComponentFixture<ModalHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
