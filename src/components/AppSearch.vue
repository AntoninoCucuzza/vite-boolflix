<script>
import { state } from '../state.js';
export default {
    name: 'AppSearch',
    data() {
        return {
            state,
            searchFor: '',
        }
    },
    created() {
        state.fetchData()
    },
    methods: {
        lookingFor() {

            /* chiamata per film */
            state.movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=70c44c389e206232e0acaece4703adc9'
            const newMovieUrl = state.movie_url + `&query=${this.searchFor}`;
            this.state.movie_url = newMovieUrl

            state.fetchData(newMovieUrl)


            /* chiamata per serie tv */
            state.tv_series_url = 'https://api.themoviedb.org/3/search/tv?api_key=70c44c389e206232e0acaece4703adc9'
            const newTvSeriesUrl = state.tv_series_url + `&query=${this.searchFor}`;
            this.state.tv_series_url = newTvSeriesUrl

            state.fetchData(newTvSeriesUrl)
            this.searchFor = ''
        }
    },
}
</script>

<template>
    <form @submit.prevent="lookingFor()">
        <button type="submit">cerca</button>
        <input type="text" v-model="searchFor">
    </form>
</template>


<style lang="scss" scoped></style>