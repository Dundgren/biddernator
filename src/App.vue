<script setup lang="ts">
    import LoginForm from "./components/LoginForm.vue";
    import UserCard from "./components/UserCard.vue";
    import BidForm from "./components/BidForm.vue";
</script>

<template>
    <!-- Stupid simple "login" if username is set show bidding instead of login-->
    <div v-if="this.$store.state.username" id="main">
        <UserCard />
        <BidForm />
    </div>
    <div v-else>
        <LoginForm />
    </div>
</template>

<style>
    #main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
    }
</style>
