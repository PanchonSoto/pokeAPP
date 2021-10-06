import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemons.interface';
import { PokemonsService } from './../../services/pokemons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  
    mat-card {
      margin-top: 20px;
      height:620px;
    }

    img{
      height:400px;
    }

    .avatar{
      height: 80px;
      width: 80px;
    }
  `
  ]
})
export class ListadoComponent implements OnInit {

  pokemons:Pokemon[]=[];

  constructor(private pService: PokemonsService ) { }

  ngOnInit(): void {

    for(let i=1; i<=Math.floor(Math.random() * 444 + 1); i++){
      
      this.pService.getPokemon(i)
        .subscribe(pokemon=>{
           this.pokemons.push(pokemon);
        });

    }  
    
    this.order();
  }

order(){
  this.pokemons.sort(function(a, b) {
    return (a.id) - (b.id);
});
}

}


