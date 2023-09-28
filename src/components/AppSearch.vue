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
            /* console.log(state.base_url + `&query=${this.searchFor}`); */

            state.base_url = 'https://api.themoviedb.org/3/search/movie?api_key=70c44c389e206232e0acaece4703adc9'
            const newUrl = state.base_url + `&query=${this.searchFor}`;
            this.state.base_url = newUrl

            state.fetchData(newUrl)
            console.log(newUrl);

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