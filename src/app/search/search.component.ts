import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import 'rxjs/add/operator/switchMap';

import { DataLoaderService } from '../data-loader.service';

@Component({
  selector: 'fuse-demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  questions: Array<{text: string, tags: Array<string>}> = [];

  question: string = null;
  answer: string = null;
  formSubmitted = false;

  constructor(private dataLoader: DataLoaderService) { }

  onKeyUp() {
    const question = this.question.trim();

    if (question.length < 3) {
      this.questions = [];
    } else if (question.length >= 3) {
      this.dataLoader.getQuestions(question).subscribe(
        data => {
          this.questions = data;
        }
      );
    }
  }

  onSubmit() {
    if (!this.question) {
      return;
    }

    this.dataLoader.getQuestions(this.question)
      .map(questions => questions.length > 0 ? questions[0] : null)
      .switchMap(question => question ? this.dataLoader.getAnswers(question.tags[0]) : Observable.of(null))
      .subscribe(answer => {
        this.answer = answer;
        this.formSubmitted = true;
      });
  }

  optionSelected(ev: MatAutocompleteSelectedEvent) {
    this.question = ev.option.viewValue;
    this.onSubmit();
  }
}
