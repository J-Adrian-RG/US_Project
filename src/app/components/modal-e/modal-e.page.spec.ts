import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEPage } from './modal-e.page';

describe('ModalEPage', () => {
  let component: ModalEPage;
  let fixture: ComponentFixture<ModalEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
