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
        }
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        },
        async placeBid() {
            const userCurrency = this.$store.state.chosenCurrency;
            const itemCurrency = this.itemHandler.getItem(this.currentItem).currency;
            const convertedAmount = await convertCurrency(userCurrency, itemCurrency, this.bid)
            
            this.itemHandler.placeBid(convertedAmount, this.currentItem, this.username);
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
