import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-list-model',
  templateUrl: './search-list-model.component.html',
  styleUrls: ['./search-list-model.component.scss']
})
export class SearchListModelComponent {


  @Input('products') products!:any[];
}
