<template>
    <div id="bidding-div">
        <div>
            <h1>Items</h1>
            <select v-model="this.currentItem">
                <option v-for="item in items">{{ item.name }}</option>
            </select>
            <p>Enter bid:</p>
            <input type="number" v-model="this.bid">
            <button @click="placeBid">Place bid</button>
        </div>
        <div>
            <h1>{{ currentItem }}</h1>
            <h2>Bids</h2>
            <ul>
                <li v-for="bid in currentBids">{{ bid }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { initItemHandler } from "../helpers/init";
import { convertCurrency } from "../helpers/currency";

export default {
    data() {
        return {
            username: this.$store.state.username,
            bid: "",
            currentBids: "",
        }
    },
    computed: {
        itemHandler() {
            return initItemHandler();
        },
        items() {
            return this.itemHandler.getItems()
        },
        currentItem: {
            get() {
                return this.$store.state.currentItem;
            },
            set(data) {
                this.$store.commit("setCurrentItem", data);
            }
        },
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        },
        async placeBid() {
            // Adds the bid to the currentItem
            const userCurrency = this.$store.state.chosenCurrency;
            const itemCurrency = this.itemHandler.getItem(this.currentItem).currency;
            const convertedAmount = await convertCurrency(userCurrency, itemCurrency, this.bid)
            
            this.itemHandler.placeBid(convertedAmount, this.currentItem, this.username);
            this.setBids();
            console.log(this.currentBids)
        },
        async setBids() {
            // Loops through the bids array and converts all bids to user currency. Then sets currentBids.
            const bids = this.itemHandler.getItem(this.currentItem).bids;
            const itemCurrency = this.itemHandler.getItem(this.currentItem).currency;
            const userCurrency = this.$store.state.chosenCurrency;

            for (let i = 0; i < bids.length; i++) {
                for (let key in bids[i]) {
                    const bid = bids[i][key];
                    const convertedCurrency = await convertCurrency(itemCurrency, userCurrency, bid);

                    bids[i][key] = convertedCurrency;
                }
            }

            this.currentBids = bids;
        }
    }
}
</script>

<style>
    #bidding-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
