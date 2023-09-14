import { Overlay } from '@angular/cdk/overlay';
import { HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CertificadoPage } from './certificado.page';

describe('CertificadoPage', () => {
  let component: CertificadoPage;
  let fixture: ComponentFixture<CertificadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoPage ],
      imports: [IonicModule.forRoot()],
      providers: [HttpHandler,MatSnackBar,Overlay,ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
