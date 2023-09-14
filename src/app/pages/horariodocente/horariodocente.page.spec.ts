import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HorariodocentePage } from './horariodocente.page';

describe('HorariodocentePage', () => {
  let component: HorariodocentePage;
  let fixture: ComponentFixture<HorariodocentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariodocentePage ],
      imports: [IonicModule.forRoot()],
      providers: [ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(HorariodocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
