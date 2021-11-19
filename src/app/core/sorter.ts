import { Inventory } from "./inventory";
import { StoreItem } from "./store-item";

export abstract class Sorter implements Inventory {
    constructor(inventory: Inventory) {
        this.inventory = inventory
    }
    
    protected inventory: Inventory

    abstract getItems(): StoreItem[]
}
