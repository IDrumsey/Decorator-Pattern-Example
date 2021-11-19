import { StoreItem } from "./store-item";

export interface Inventory {
    getItems(): StoreItem[]
}
