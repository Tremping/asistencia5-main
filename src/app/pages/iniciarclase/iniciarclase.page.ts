import { Component, OnInit } from '@angular/core';
import { ApiservicioService } from 'src/app/services/apiservicio.service';

@Component({
  selector: 'app-iniciarclase',
  templateUrl: './iniciarclase.page.html',
  styleUrls: ['./iniciarclase.page.scss'],
})
export class IniciarclasePage implements OnInit {

qrString = 'Asistencia registrada con éxito.'

listaRamos: any = [
  {
    id: '',
    sigla: "",
    nombre: ""
  }

]

  constructor(private api: ApiservicioService) {
    this.api.getRamos().subscribe((res)=>{
      if(res){
        this.api.getRamos().subscribe((item)=>{
          this.listaRamos = item;
        })
      }

      
    })
   }

  ngOnInit() {
  }

}
