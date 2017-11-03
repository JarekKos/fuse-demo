import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Fuse from 'fuse.js';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import questions from './questions';
import answers from './answers';

@Injectable()
export class DataLoaderService {
  private questions: Fuse = null;
  private answers: Fuse = null;

  constructor() {
    this.questions = new Fuse(questions, {keys: ['text'], threshold: 0.25, minMatchCharLength: 4, tokenize: true,});
    this.answers = new Fuse(answers, {keys: ['tags'], threshold: 0.1});
  }

  getQuestions(text) {
    return Observable.of(this.questions.search(text));
  }

  getAnswers(tag) {
    return Observable.of(this.answers.search(tag)).map(answerArr => answerArr[0]['text']);
  }

}
