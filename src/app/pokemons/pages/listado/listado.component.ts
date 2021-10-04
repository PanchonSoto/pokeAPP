import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemons.interface';
import { PokemonsService } from './../../services/pokemons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    img {
      width: 320px;
      height: 320px;
    }
    mat-card {
      margin-top: 20px;
    }
  `
  ]
})
export class ListadoComponent implements OnInit {

  pokemons:Pokemon[]=[];
  pokemonsO: Pokemon[]=[];

  constructor(private pService: PokemonsService ) { }

  ngOnInit(): void {

    for(let i=1; i<=20; i++){
      
      this.pService.getPokemon(i)
        .subscribe(pokemon=>{
           this.pokemons.push(pokemon);
        });
    }

    
  }



}


