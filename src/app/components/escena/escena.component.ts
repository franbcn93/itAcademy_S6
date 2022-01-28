import { Component, Input, OnInit, Output } from '@angular/core';
import { FrasesHistoria } from '../home/home.component';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  
  @Input() listado_frases: FrasesHistoria[] = [];
  currentSentence:number = 0;

  constructor() {
   }

  ngOnInit(): void {
  }
  

  next(){
    if(this.currentSentence === 3){
      this.currentSentence = 0;
    }else{
      this.currentSentence++;
    }
  }

  prev(){
    if(this.currentSentence === 0){
      this.currentSentence = 3;
    }else{
      this.currentSentence--;
    }
  }

}
