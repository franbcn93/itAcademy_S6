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
  image:string = "1.jpg";

  constructor() {
   }

  ngOnInit(): void {
  }
  

  next(){
    console.log(this.listado_frases[this.currentSentence].img, this.image);
    if(this.currentSentence === 3){
      this.currentSentence = 0;
      this.image = "1.jpg";
    }else{
      this.currentSentence++;
      this.image = this.listado_frases[this.currentSentence].img;
    }
  }

  prev(){
    if(this.currentSentence === 0){
      this.currentSentence = 3;
      this.image = this.listado_frases[3].img;
    }else{
      this.currentSentence--;
      this.image = this.listado_frases[this.currentSentence].img;  
    }
  }

}
