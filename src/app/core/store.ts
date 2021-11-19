import { Inventory } from "./inventory";
import { StoreItem } from "./store-item";

export class Store implements Inventory {
    constructor(items: StoreItem[]) {
        this.items = items
    }
    
    items: StoreItem[] = []

    getItems() {
        return this.items
    }
}
