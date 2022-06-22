export class Item {
    readonly name: string;
    readonly currency: string;
    public bids: any[];

    constructor(name: string, currency: string, bids: any[] = []) {
        this.name = name;
        this.currency = currency;
        this.bids = bids;
    }
}
