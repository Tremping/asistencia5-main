import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CertificadosPage } from './certificados.page';

describe('CertificadosPage', () => {
  let component: CertificadosPage;
  let fixture: ComponentFixture<CertificadosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadosPage ],
      imports: [IonicModule.forRoot()],
      providers: [ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
