import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treinamentos',
  templateUrl: './treinamentos.component.html',
  styleUrls: ['./treinamentos.component.css']
})
export class TreinamentosComponent implements OnInit {

  constructor(private _router: Router) { }

  public departamentos = [
    {id: 1, "nome" : "TI"},
    {id: 2, "nome" : "RH"},
    {id: 3, "nome" : "Financeiro"},
    {id: 4, "nome" : "Fiscal"},
    {id: 5, "nome" : "Compras"}
  ]

  onSelect(departamento: number): void{
    this._router.navigate(['/home/treinamento/',departamento])
  }

  ngOnInit(): void {
  }

}
