import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  result: any;
  filmes: any = [];

  constructor(private serviceAuth: AuthService) { }

  ngOnInit(): void {
    this.serviceAuth.getFilmes('popular').then((res) => {      
      this.result = res;
      this.filmes = this.result.results; 
      console.log(this.filmes);
    });    
  }

}
