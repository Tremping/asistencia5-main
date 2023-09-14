import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.page.html',
  styleUrls: ['./edicion.page.scss'],
})
export class EdicionPage implements OnInit {
  nombre: "";
  apellidos: "";
  correo: "";

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private activedRouter: ActivatedRoute, private servicioBD: BaseService) {
    this.activedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombre = this.router.getCurrentNavigation().extras.state.nombreEnviado;
        // this.apellidos = this.router.getCurrentNavigation().extras.state.apellidoEnviado;
        this.correo = this.router.getCurrentNavigation().extras.state.correoEnviado;
      }
    })

   }
   






  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  modificar(){
    this.servicioBD.modificarPerfil(this.nombre,this.correo);
    this.servicioBD.presentAlert("Perfil Modificado");
    this.router.navigate(['/perfil']);
  }




  onSubmit(): void {
    console.log('Form ->');
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
