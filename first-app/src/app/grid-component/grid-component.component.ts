import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {
  public stampa : string = '';
  public  testo2 : string = '';
  public nome1 : string = '';
  public persone = ['Max', 'Paolo', 'Maria'];
  
  public users = [
    {nome: 'Luca', citta:'Roma'},
    {nome: 'Marco', citta:'Terni'},
    {nome: 'Matteo', citta:'Milano'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getClick(event: any){
    console.log("event: ",event);
  }

  getText(event: any){
    console.log("event: ",event.target.value);
    this.stampa = event.target.value;
  }

  // REFERENCE
  getData(input: any){
    console.log("input: ",input);    
  }

  addNome(){
      this.persone.push(this.nome1);
  }

  addUsers(nome:any, citta:any){
    this.users.push({nome: nome, citta: citta});
  }

}
