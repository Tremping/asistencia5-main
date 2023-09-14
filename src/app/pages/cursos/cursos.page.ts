import { Component, OnInit } from '@angular/core';
import { ApiservicioService } from 'src/app/services/apiservicio.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  listaRamos: any = [
    {
      id: '',
      sigla: "",
      nombre: ""
    }

  ]

  listaSeccion: any = [
    {
      id: '',
      sigla: ""
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
    this.api.getSeccion(1).subscribe((res)=>{
      if(res){
        this.api.getSeccion(1).subscribe((item)=>{
          this.listaSeccion = item;
        })
      }

      
    })
   }
  
  
  
  
  
  ngOnInit() {

  }

}
