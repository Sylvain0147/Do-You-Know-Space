import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuiz]'
})
export class QuizDirective {

  constructor(element: ElementRef) {
    element.nativeElement.addEventListener(
      "click",
      function() {
        if (element.nativeElement.style.visibility == "visible"){
          element.nativeElement.style.visibility = "hidden";
        }
      }
    )
}
}
