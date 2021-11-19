import { Sorter } from "./sorter";
import { StoreItem } from "./store-item";

export class AscQuantitySorter extends Sorter {
    getItems(): StoreItem[] {
        let inv = this.inventory.getItems()
        let sorted = inv.sort((a, b) => {return a.quantity < b.quantity ? -1 : 1})
        return sorted
    }
}
