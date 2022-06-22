export class Item {
    readonly name: string;
    readonly currency: string;
    public bids: Array<any>;

    constructor(name: string, currency: string, bids: Array<any>) {
        this.name = name;
        this.currency = currency;
        this.bids = []
    }
}
