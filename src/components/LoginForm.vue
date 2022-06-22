<template>
    <div id="login-form">
        <p>Enter username:</p>
        <input type="text" id="usernameInput" v-model="username" @keypress.enter="setUsername">
        <br>
        <input type="button" value="Login!"  @click="setUsername">
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
        }
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        }
    }
}
</script>
