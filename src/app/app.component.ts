import { Component } from '@angular/core';
import { AscNameSorter } from './core/asc-name-sorter';
import { AscQuantitySorter } from './core/asc-quantity-sorter';
import { Inventory } from './core/inventory';
import { Store } from './core/store';
import { StoreItem } from './core/store-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storeInv: Inventory = new Store([
    new StoreItem("apples", 50),
    new StoreItem("orange juice", 5),
    new StoreItem("milk", 10),
    new StoreItem("oranges", 40),
  ])

  toShowInv = this.storeInv

  sortInvByQuantity(): void {
    this.toShowInv = new AscQuantitySorter(this.storeInv)
  }

  sortInvByName(): void {
    this.toShowInv = new AscNameSorter(this.storeInv)
  }
}
