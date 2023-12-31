import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IniciarclasePage } from './iniciarclase.page';

describe('IniciarclasePage', () => {
  let component: IniciarclasePage;
  let fixture: ComponentFixture<IniciarclasePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarclasePage ],
      imports: [IonicModule.forRoot()],
      providers: [HttpClient,HttpHandler,ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
