import { Item } from "./Item";

export class ItemHandler {
    private _items: {[key: string]: Item};

    constructor() {
        this._items = {};
    }

    public addItem(itemName: string, itemCurrency: string) {
        this._items[itemName] = new Item(itemName, itemCurrency);
    }

    public placeBid(bidAmount: number, itemName: string, bidderName: string) {
        const bid =  { bidderName: bidAmount };

        this._items[itemName].bids.push(bid);
    }

    public getItem(itemName: string) {
        return this._items[itemName]
    }

    public getItems() {
        return this._items;
    }
}
