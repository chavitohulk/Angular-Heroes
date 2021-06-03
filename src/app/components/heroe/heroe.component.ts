import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe:any={ }

  origen:string="heroe";

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesService
    ) { 
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id'])
      this.heroe=this._heroesServices.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

 

}
