<template>
    <div>
        <h1>Bids</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: this.$store.state.username,
        }
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        }
    }
}
</script>