import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

 nome: string | undefined= "abc" ;

 pessoa : any = {
  nome: "teste",
  idade: 21
 }


  constructor() { }

  ngOnInit(): void {
  }




}
