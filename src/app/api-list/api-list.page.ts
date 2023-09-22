import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.page.html',
  styleUrls: ['./api-list.page.scss'],
})
export class ApiListPage implements OnInit {

  listPokemon: any []=[];

  estadoToken: any; 

  constructor(public http: HttpClient, private router: Router, private PokeService: PokemonService ) { }

  ngOnInit() {

    this.ValidacionToken();
    this.getPokemons();
  }

  ValidacionToken(){
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken = JSON.parse(this.estadoToken);
    
    if (this.estadoToken == false){
      this.router.navigate(['./login']);
    }
  }

  getPokemons(){
    for (let i =1; i <= 150; i++){
      this.PokeService.getPokemon(i).subscribe(
        (res) => {
          this.listPokemon.push(res);
        },
        (err) => {

        }
      );
    }
  }

}
