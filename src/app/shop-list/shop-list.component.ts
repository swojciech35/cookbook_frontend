import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {

  @Input() shopList: any

  constructor() {
    this.shopList = {
      recipeTitles: [],
      ingredients: []
    }
  }


}
