import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService:HeroesService,
              private router:Router
    ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/encontrado',termino]); 
    console.log(termino);

  }

}
