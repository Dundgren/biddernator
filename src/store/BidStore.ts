import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            username: "",
            currentItem: "Vintage car",
            chosenCurrency: "",
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setCurrentItem(state, itemName) {
            state.currentItem = itemName;
        },
        setChosenCurrency(state, currency) {
            state.chosenCurrency = currency;
        }
    }
});