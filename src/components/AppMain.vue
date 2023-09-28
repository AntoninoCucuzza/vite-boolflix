<script>
import { state } from '../state.js';
import CardFilm from './CardFilm.vue';

state
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData()
    },
    components: {
        CardFilm,
    }

}
</script>
<template>
    <main>
        <div class="container">
            <div class="row">

                <CardFilm v-for="film in state.filmList" :filmTitle="film.title" :filmOriginalTitle="film.original_title"
                    :filmOriginalLanguage="film.original_language" :filmVoteAverage="film.vote_average"
                    :flag="film.original_language" />
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 70px);
    background-color: rgb(34, 32, 29);
    color: white;
}
</style>