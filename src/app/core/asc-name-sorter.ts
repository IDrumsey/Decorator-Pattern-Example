import { Sorter } from "./sorter";

export class AscNameSorter extends Sorter {
    getItems() {
        let inv = this.inventory.getItems()
        let sorted = inv.sort((a, b) => {return a.name < b.name ? -1 : 1})
        return sorted
    }
}
