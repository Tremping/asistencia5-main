import { Component, OnDestroy} from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ApiservicioService } from 'src/app/services/apiservicio.service';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnDestroy {

  resultadoEscan: any;
  content_visibility = '';
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


  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.resultadoEscan = result.content;
        console.log(this.resultadoEscan);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
      this.stopScan();
  }

}
