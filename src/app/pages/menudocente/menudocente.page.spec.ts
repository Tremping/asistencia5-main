import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenudocentePage } from './menudocente.page';

describe('MenudocentePage', () => {
  let component: MenudocentePage;
  let fixture: ComponentFixture<MenudocentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudocentePage ],
      imports: [IonicModule.forRoot()],
      providers: [ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(MenudocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
