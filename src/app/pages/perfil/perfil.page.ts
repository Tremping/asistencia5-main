import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  imageData = null;
  currentImage = null;
  photo: SafeResourceUrl;
  u = localStorage.getItem("usuario")
  id_u = localStorage.getItem("id_usuario")
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async captureImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    }); 
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64String))
    // localStorage.setItem("foto",this.imageData)
  }
}
