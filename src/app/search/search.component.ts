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
  inputValue = '';
  isFormDisabled = false;

  constructor(private dataLoader: DataLoaderService) { }

  onSubmit() {
    this.isFormDisabled = true;
    this.dataLoader.getData(this.inputValue).subscribe(
      data => {
        this.list = data;
        this.isFormDisabled = false;
      }
    );
  }

}
