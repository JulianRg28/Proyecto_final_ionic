import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {

  audio: any;
  listCanciones: any [] = [];
  currentPlayingSong: any = null; 
  tpo:boolean=true;

  constructor(public http: HttpClient, private router: Router) { }



  ngOnInit() {
    this.http.get('assets/music/listaCanciones/musica.JSON').subscribe((data:any) =>{
      if(data && data.length > 0 && data[0].music2){
        this.listCanciones = data[0].music2;
      }

    });
  }

  playMusic(cancion: any) {

    if(cancion && cancion.music){
      const rutaCompleta = `assets/${cancion.music}`;
      if (this.currentPlayingSong) {
        this.currentPlayingSong.pause();
      }
      this.audio = new Audio(rutaCompleta);
      this.audio.load();
      this.audio.play();
      cancion.tpo = false;
      this.currentPlayingSong = this.audio;
    }
  }
    
  pauseMusic(cancion: any) {
    cancion.tpo = true;
    if (this.audio){
      this.audio.pause();
    }
  }

  back() {
    this.router.navigate(['./cards'])
    if (this.audio){
      this.audio.pause();
    }
    
  }

}
