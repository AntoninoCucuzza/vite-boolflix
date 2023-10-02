<script>
import { state } from '../state.js';
import CardFilm from './CardFilm.vue';
import CardSeries from './CardSeries.vue';
import PopularMovie from './PopularMovie.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            state,
            toggle: true,
            maxCard: state.popularMovie.length,
        }
    },
    created() {
        state.fetchData()
    },
    components: {
        CardFilm,
        CardSeries,
        PopularMovie,
    },
    methods: {
        toggler() {
            this.toggle = !this.toggle;
            this.maxCard = this.toggle ? state.popularMovie.length : 6;
        },
    },
}
</script>
<template>
    <main>
        <div class="contenitore">
            <div class="row">
                <div class="d-flex align-items-center">
                    <h1 class="pe-4">Popular Movie</h1>
                    <div class="btn btn-danger" @click="toggler">
                        {{ toggle ? 'Mostra Tutto' : 'Mostra Meno' }}
                    </div>

                </div>
                <PopularMovie v-for="movie in state.popularMovie.slice(0, maxCard) " :Poster="movie.poster_path"
                    :Title="movie.title" :OriginalTitle="movie.original_name" :VoteAverage="movie.vote_average"
                    :OriginalLanguage="movie.original_language" :overview="movie.overview" />

                <h1 v-if="state.filmList.length > 0">movie</h1>
                <CardFilm v-for="film in state.filmList" :filmPoster="film.poster_path" :filmTitle="film.title"
                    :filmOriginalTitle="film.original_title" :filmOriginalLanguage="film.original_language"
                    :filmVoteAverage="film.vote_average" :overview="film.overview" />

                <h1 v-if="state.tvSeriesList.length > 0">tv series</h1>
                <CardSeries v-for=" series in state.tvSeriesList" :seriesPoster="series.poster_path"
                    :seriesName="series.name" :seriesOriginalName="series.original_name"
                    :seriesOriginalLanguage="series.origin_country" :seriesVoteAverage="series.vote_average"
                    :overview="series.overview" />
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 70px);
    background-color: rgb(34, 32, 29);
    color: white;

    .contenitore {
        width: 90%;
        max-width: 1800px;
        margin: 0 auto;

        .btn-danger {
            background-color: #e50914;
        }
    }
}
</style>