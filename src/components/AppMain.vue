<script>
import { state } from '../state.js';
import CardFilm from './CardFilm.vue';
import CardSeries from './CardSeries.vue';
import SliderMovie from './SliderMovie.vue'
state
export default {
    name: 'AppMain',
    data() {
        return {
            state,
            activeFilm: 0,
        }
    },
    created() {
        state.fetchData()
    },
    components: {
        CardFilm,
        CardSeries,
        SliderMovie
    },
    methods: {

    }

}
</script>
<template>
    <main>
        <div class="contenitore">
            <h1>Popular Movie</h1>
            <div class="row no-wrap">
                <SliderMovie v-for="movie in state.popularMovie" :Poster="movie.poster_path" />
            </div>

            <div class="row">

                <h1 v-if="state.filmList.length > 0">movie</h1>
                <CardFilm v-for="film in state.filmList" :filmPoster="film.poster_path" :filmTitle="film.title"
                    :filmOriginalTitle="film.original_title" :filmOriginalLanguage="film.original_language"
                    :filmVoteAverage="film.vote_average" />

                <h1 v-if="state.tvSeriesList.length > 0">tv series</h1>
                <CardSeries v-for=" series in state.tvSeriesList" :seriesPoster="series.poster_path"
                    :seriesName="series.name" :seriesOriginalName="series.original_name"
                    :seriesOriginalLanguage="series.origin_country" :seriesVoteAverage="series.vote_average" />
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

        .no-wrap {
            flex-wrap: nowrap;
            overflow-x: scroll;
        }

    }
}
</style>