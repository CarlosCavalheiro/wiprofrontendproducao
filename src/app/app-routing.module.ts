import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './paginas/dados/dados.component';
import { GraficoComponent } from './paginas/grafico/grafico.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  { path: '' , component: InicioComponent},
  { path: 'grafico', component: GraficoComponent },
  { path: 'dados', component: DadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
