import { ItemHandler } from "../items/ItemHandler";

/**
 * Creates a new ItemHandler and adds two items for testing.
 * 
 * @returns {ItemHandler} itemHandler
 */
export function initItemHandler() {
    const itemHandler = new ItemHandler();

    itemHandler.addItem("Vintage car", "GBP");
    itemHandler.addItem("Rare Luger", "SEK");

    return itemHandler;
}
