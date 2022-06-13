import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { DadosComponent } from './paginas/dados/dados.component';
import { GraficoComponent } from './paginas/grafico/grafico.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    GraficoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
