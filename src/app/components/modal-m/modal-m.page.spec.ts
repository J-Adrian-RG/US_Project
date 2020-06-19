import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMPage } from './modal-m.page';

describe('ModalMPage', () => {
  let component: ModalMPage;
  let fixture: ComponentFixture<ModalMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
