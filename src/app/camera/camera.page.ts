import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imageSource: any; 
  photos: {image: string, captureDate: Date}[] = [];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.imageSource = image.dataUrl;

    const captureDate = new Date();

    this.photos.push({image: this.imageSource, captureDate: captureDate});

  }

  back(){
    this.router.navigate(['.cards'])
  }

}
