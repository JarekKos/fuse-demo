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
        this.questions = data;
      }
    );
  }

  onSubmit(fm) {
    console.log(fm);
  }

  optionSelected(ev) {
    this.question = ev.option.viewValue;
    this.answer = this.dataLoader.getAnswers(ev.option.value[0]);
  }

}
