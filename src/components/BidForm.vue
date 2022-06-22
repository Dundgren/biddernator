<template>
    <div id="bidding-div">
        <div>
            <h1>Items</h1>
            <select v-model="this.currentItem">
                <option v-for="item in items">{{ item.name }}</option>
            </select>
        </div>
        <div>
            <BidList />
        </div>
    </div>
</template>

<script>
import BidList from "./BidList.vue";
import { initItemHandler } from "../helpers/init";

export default {
    data() {
        return {
            username: this.$store.state.username,
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
                console.log(this.$store.state.currentItem)
            }
        }
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        }
    },
    components: {
        BidList
    }
}
</script>

<style>
    #bidding-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
