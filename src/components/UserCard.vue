<template>
    <div>
        <h1>{{ this.username }}</h1>
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