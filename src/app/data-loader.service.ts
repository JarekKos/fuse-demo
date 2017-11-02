import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as Fuse from 'fuse.js';

import { list } from './data';

@Injectable()
export class DataLoaderService {

  private fuse: Fuse = null;

  constructor() {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'title',
      ]
    };
    this.fuse = new Fuse(list, options);
  }

  getData(search) {
    return Observable.of(this.fuse.search(search)).delay(800);
  }

}
