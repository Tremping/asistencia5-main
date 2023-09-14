import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EdicionPage } from './edicion.page';

describe('EdicionPage', () => {
  let component: EdicionPage;
  let fixture: ComponentFixture<EdicionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionPage ],
      imports: [IonicModule.forRoot()],
      providers: [FormBuilder,MatSnackBar,Overlay,ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(EdicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
