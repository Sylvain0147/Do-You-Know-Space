import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-easy-quiz',
  templateUrl: './easy-quiz.component.html',
  styleUrls: ['./easy-quiz.component.css']
})
export class EasyQuizComponent implements OnInit {
  exemple: string = "answer";
  questionStyle:any = {display: "none"};
  hideStyle: any = {display: "initial"};
  constructor() {}

   public easylauncher():void{
    this.questionStyle.display = "initial";
   }

   public hide():void{
     this.hideStyle.display = "none";
   }


  ngOnInit() {
    
  }

}
