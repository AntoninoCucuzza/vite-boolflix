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
            console.log('we');
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
    <div class="d-flex align-items-center">

        <div class="searchbar">
            <svg @click="lookingFor()" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="search-icon ltr-4z3qvp e1svuwfo1" data-name="MagnifyingGlass"
                aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                    fill="currentColor"></path>
            </svg>
            <input type="text" v-model="searchFor" @keyup.enter="lookingFor()">
        </div>
        <div class="bell">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em"
                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
        </div>
        <div class="img img-flow">

            <!-- img assolutamente non rubbata da netflix giuro -->
            <img width="38"
                src="https://occ-0-2637-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXVm2z4SCVYpJtljf_Y7EbBziW5bGk-hjWmEFj7A0yaTiC2rholUTLur7Gkm7d38S_h7dtCUJoxdA-T8-oc1sD3yu_iYvPk.png?r=8d8"
                alt="">

        </div>

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

.bell {
    fill: #fff;
    margin: 0 0.5rem;

}

.img {
    margin: 0 0.5rem;
    border-radius: 10px;
}
</style>