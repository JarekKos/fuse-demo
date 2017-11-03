import { Component } from '@angular/core';
import {DataLoaderService} from '../data-loader.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'fuse-demo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  list = [];

  constructor(private dataLoader: DataLoaderService) { }

  onKeyPress(value) {
    this.dataLoader.getData(value).subscribe(
      data => {
        this.list = data;
      }
    );
  }

}
