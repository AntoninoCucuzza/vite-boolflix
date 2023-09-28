<script>
import AppSearch from './AppSearch.vue';
export default {
    name: 'AppHeader',
    components: {
        AppSearch,
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center">
        <a class="logo d-flex" target="_blank" href="https://www.netflix.com/">
            <img width="200" class="img-fluid" src="../assets/img/netflix-logo-png-2562.png" alt="">
        </a>
        <AppSearch />

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: #000000e6;
    padding: 0 2rem;
}
</style>