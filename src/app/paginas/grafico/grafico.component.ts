import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto' 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

  result: any;
  filmes: any;
  chart: any = [];
  rotuloFilme: any;
  votoFilme: any;
  
  constructor(private serviceAuth: AuthService) {  
  }
    
  ngOnInit(): void { 
    this.serviceAuth.getFilmes('popular').then((res) => {
      
      this.result = res;
      this.filmes = this.result.results; 

      this.rotuloFilme = this.filmes.map((item: any) => item.original_title);
      this.votoFilme = this.filmes.map((item: any) => item.vote_count);
      
      //console.log(this.rotuloFilme);
      //console.log(this.votoFilme);
      
      //Gráfico
      this.chart = new Chart('canvas', {
        type: 'bar',                   
        data: {
          labels: this.rotuloFilme,
          datasets: [
            {
              data: this.votoFilme,              
              label: 'Total de Votos',
              borderColor: '#3e95cd',
              backgroundColor: '#3e95ff',
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        },
      });
      
    });

  }
}
