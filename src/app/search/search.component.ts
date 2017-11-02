import { Component } from '@angular/core';
import {DataLoaderService} from '../data-loader.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'fuse-demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  list = null;

  constructor(private dataLoader: DataLoaderService) { }

  search(value) {
    this.list = this.dataLoader.getData(value);
  }

}
