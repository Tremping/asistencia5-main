import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.page.html',
  styleUrls: ['./certificado.page.scss'],
})
export class CertificadoPage implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
  ngOnInit() {
  }

}
