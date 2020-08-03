import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheirschedulePage } from './theirschedule.page';

describe('TheirschedulePage', () => {
  let component: TheirschedulePage;
  let fixture: ComponentFixture<TheirschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheirschedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheirschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
