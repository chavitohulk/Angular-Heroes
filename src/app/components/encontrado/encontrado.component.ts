import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../service/heroes.service';



@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styles: [
  ]
})
export class EncontradoComponent implements OnInit {
  heroes:Heroe[]=[];
  origen:string="encontrado";
  alerta:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService
    ) { 
    this.activatedRoute.params.subscribe(params=>{
      console.log(params,['termino']);
      this.heroes=heroesService.encuentraHeroes(params['termino'])
      if (this.heroes.length==0){
        this.alerta=true;

      }
    })

  }

  ngOnInit(): void {
  }

}
