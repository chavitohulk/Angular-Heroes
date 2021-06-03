import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//RUTAS
import { AppRoutingModule } from './app-routing.module';


//SERVICIOS
import { HeroesService } from './service/heroes.service';
import { FormsModule } from '@angular/forms';


//COMPONENTS
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeTarjetaComponent } from './components/shared/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { EncontradoComponent } from './components/encontrado/encontrado.component';
import { FooterComponent } from './components/shared/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeComponent,
    EncontradoComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
