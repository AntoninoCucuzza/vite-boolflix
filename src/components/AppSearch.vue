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
            console.log('ciao');
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
    <div class="searchbar">
        <svg @click="lookingFor()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="search-icon ltr-4z3qvp e1svuwfo1" data-name="MagnifyingGlass" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                fill="currentColor"></path>
        </svg>
        <input type="text" v-model="searchFor" @keyup.enter="lookingFor()">
    </div>
</template>


<style lang="scss" scoped>
.searchbar {
    align-items: center;
    padding: 5px;
    background: rgba(0, 0, 0, .75);
    display: flex;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0px 0px 5px 0px #e50914;
    }

    path {
        fill: white;
    }

    input {
        background: transparent;
        border: none;
        color: #fff;
        font-size: 1rem;
        outline: none;
        padding: 7px 14px 7px 7px;
        width: 250px;
    }
}
</style>