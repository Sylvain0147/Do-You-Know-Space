import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-question',
  templateUrl: './page-question.component.html',
  styleUrls: ['./page-question.component.css']
})
export class PageQuestionComponent implements OnInit {
  exemple: string = "answer"
  
  constructor() { }

  ngOnInit() {
  }

}
