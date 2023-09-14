import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { ApiservicioService } from '../services/apiservicio.service';
import { BaseService } from '../services/base.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {

  usuarios: any=[{
    id_usuario: '',
    rut: '',
    nombre:'',
    apellidos: '',
    correo: '',
    clave:'',
    id_rol:''
  }];

  login: any = {
    nombre:'',
    clave:''
  };


  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public toastController: ToastController,
    private router: Router, public alertController: AlertController, private api:ApiservicioService, private bd:BaseService, public storage: Storage) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.login.nombre = this.router.getCurrentNavigation().extras.state.log0;
        this.login.clave = this.router.getCurrentNavigation().extras.state.log1;
     }

}

User(){
  let navigationExtras: NavigationExtras = {
    state:{log0: this.login.nombre, log1:this.login.clave}
  }
  this.router.navigate(['/menu'], navigationExtras)
}

 ingresar(){
  this.bd.login(this.login.nombre, this.login.clave);
  localStorage.setItem("usuario",this.login.nombre)
  localStorage.setItem("id_usuario",this.login.id_usuario)

  //const response = await this.bd.login(this.login.nombre, this.login.clave)
  //response ? this.User(): this.bd.presentAlert("Nombre y/o contraseña incorrectos")
}




  


  ngOnInit() {
    this.api.getUsuarios().subscribe((res)=>{
      this.usuarios = res;
      //console.log(res)
      for(let x of this.usuarios){
        this.bd.registrarUsuario(x.id_usuario,x.nombre,x.clave,x.id_rol);
      }
  });
}

ionViewWillEnter() {
  this.menuCtrl.enable(false, 'first');
}
}
