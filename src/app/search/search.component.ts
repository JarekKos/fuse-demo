import { Component } from '@angular/core';
import {DataLoaderService} from '../data-loader.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'fuse-demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  questions = [];

  question = null;
  answer = null;

  constructor(private dataLoader: DataLoaderService) { }

  onKeyUp() {
    this.dataLoader.getQuestions(this.question).subscribe(
      data => {
        this.questions = data; //
      }
    );
  }

  onSubmit() {
    this.dataLoader.getQuestions(this.question).subscribe(
      data => {
        const question = Array.isArray(data) && data.length > 0 ? data[0] : {tags: ['xxx']};
        console.log(question);
        this.dataLoader.getAnswers(question['tags'][0]).subscribe(
          answer => this.answer = answer,
        );
      }
    );
  }

  optionSelected(ev) {
    this.question = ev.option.viewValue;
    this.dataLoader.getAnswers(ev.option.value[0]).subscribe(
      answer => this.answer = answer,
    );
  }

}
