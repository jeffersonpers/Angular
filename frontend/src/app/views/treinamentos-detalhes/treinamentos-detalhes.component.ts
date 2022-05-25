import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treinamentos-detalhes',
  templateUrl: './treinamentos-detalhes.component.html',
  styleUrls: ['./treinamentos-detalhes.component.css']
})
export class TreinamentosDetalhesComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public departamentoId = 0;

  ngOnInit(): void {
    this._route.params.subscribe(params => this.departamentoId = params['id']);
  }

}
