import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {


  tarefas: any = {
    descricao: "teste",
    responsavel: {
      usuario: null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
