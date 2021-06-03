import { Component, OnInit,Input } from '@angular/core';
import { Heroe, HeroesService } from '../../../service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() idx:number;
  @Input() desde:string;

 
  mostrar:boolean=true;
  mostrartarjeta:boolean=false;
  mostrarencontrado:boolean=false;

  constructor(private _heroesService:HeroesService,
              private router:Router ){}

  ngOnInit(): void {    
    if(this.desde=="heroes"){
      this.mostrar=true;
      this.mostrartarjeta=false
      this.mostrarencontrado=false
    }else if(this.desde=="heroe") {
      this.mostrar=false;
      this.mostrartarjeta=true;
      this.mostrarencontrado=false
    }else if(this.desde=="encontrado") { 
      this.mostrar=false;
      this.mostrartarjeta=false;
      this.mostrarencontrado=true;


     }  
  }

  verHeroeE(desde:string){
  }

 

  verHeroe(idx:number){
    this.router.navigate(['heroe',idx]);
    
    
   
  }
  
  

}
