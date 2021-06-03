import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
   origen:string="heroes";

   heroes:Heroe[]=[]

  constructor( private _heroresService:HeroesService) { }

  ngOnInit(): void {
    this.origen="heroes";

    this.heroes=this._heroresService.getHeroes();
   /* console.log("desde heroes y eso es el origen")
    console.log(this.origen);*/
  }
  

}
