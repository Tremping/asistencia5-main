import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menudocente',
  templateUrl: './menudocente.page.html',
  styleUrls: ['./menudocente.page.scss'],
})
export class MenudocentePage implements OnInit {
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
  c: string;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.u = this.router.getCurrentNavigation().extras.state.usuario;
        this.c = this.router.getCurrentNavigation().extras.state.contra;

      }
    })

  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'first');
  }

}
