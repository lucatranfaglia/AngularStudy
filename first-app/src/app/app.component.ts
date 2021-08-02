import { Component } from '@angular/core';
// (ngSwitch, ngIf, ngFor, ...)
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';


  public valore = 10;
  public stampa : string = '';
  public  testo2 : string = '';
  public nome1 : string = '';
  public persone = ['Max', 'Paolo', 'Maria'];

  public classe = true;

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

  // changeClass(){
  //   if(this.classe===true){
  //     this.classe=false;
  //   }else{
  //     this.classe=true;
  //   }
  // }

}
