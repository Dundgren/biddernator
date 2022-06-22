<template>
    <div>
        <h1>{{ this.username }}</h1>
        <h2>Chosen currency: {{ this.currency }}</h2>
        <form>
            <select v-model="this.currency">
                <option value="USD">USD</option>
                <option value="SEK">SEK</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: this.$store.state.username,
        }
    },
    computed: {
        currency: {
            get() {
                return this.$store.state.chosenCurrency;
            },
            set(data) {
                this.$store.commit("setChosenCurrency", data);
            }
        }
    }
}
</script>