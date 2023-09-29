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
        <div class="d-flex align-items-center   ">
            <a class="logo d-flex" target="_blank" href="https://www.netflix.com/">
                <img width="150" class="img-fluid" src="../assets/img/netflix-logo-png-2562.png" alt="">
            </a>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Serie Tv</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Film</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Novita e popolari</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">La mia lista</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sfoglia per lingua</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
        <AppSearch />

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: #000000e6;
    padding: 0 2rem;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent);


    .nav-link {
        color: white !important;

        &:hover {
            color: #e50914 !important;
        }
    }
}
</style>