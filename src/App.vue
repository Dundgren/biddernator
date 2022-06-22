<script setup lang="ts">
    import LoginForm from "./components/LoginForm.vue";
    import UserCard from "./components/UserCard.vue";
</script>

<template>
    <div v-if="this.$store.state.username" id="main">
        <UserCard/>
    </div>
    <div v-else>
        <LoginForm/>
    </div>
</template>

<style>
    #main {
        display: grid;
    }
</style>
