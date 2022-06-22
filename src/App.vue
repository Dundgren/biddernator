<script setup lang="ts">
    import LoginForm from "./components/LoginForm.vue";
    import UserCard from "./components/UserCard.vue";
import BidForm from "./components/BidForm.vue";
import BidList from "./components/BidList.vue";
</script>

<template>
    <div v-if="this.$store.state.username" id="main">
        <UserCard/>
        <BidForm/>
        <BidList/>
    </div>
    <div v-else>
        <LoginForm/>
    </div>
</template>

<style>
    #main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>
