import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuarios: any=[{
    id_usuario: '',
    rut: '',
    nombre:'',
    apellidos: '',
    correo: '',
    clave:'',
    id_rol:''
  }];

  u = localStorage.getItem("usuario")
  id_u = localStorage.getItem("id_usuario")
  c: string;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private router: Router, private activedRouter: ActivatedRoute, private bd: BaseService, private alertController: AlertController) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.u = this.router.getCurrentNavigation().extras.state.usuario;
        this.c = this.router.getCurrentNavigation().extras.state.contra;

      }
    })

  }
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    //subscribimos al estatus de la base de datos
    this.bd.dbState().subscribe((res)=>{
      if(res){
        //subscribimos al observable que hace el select en la tabla noticias
        this.bd.fetchUsuarios().subscribe((item)=>{
          //guardamos estos cambios de información en una variable propia de este ts
          this.usuarios = item;
        })
      }
    })
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'first');
  }

}





