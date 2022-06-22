import { ItemHandler } from "../src/items/ItemHandler";
import { Item } from "../src/items/Item";

let itemHandler: ItemHandler;

beforeEach(() => {
    itemHandler = new ItemHandler();
    itemHandler.addItem("testItem", "test");
})

test("Getting an item", () => {
    expect(
        itemHandler.getItem("testItem")
    ).toBeInstanceOf(Item);
})
