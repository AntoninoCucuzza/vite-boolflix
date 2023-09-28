import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=70c44c389e206232e0acaece4703adc9',
    BoolflixList: [],

    fetchData() {
        axios
            .get(this.base_url)
            .then(response => {
                //console.log(response);
                this.BoolflixList = response.data.results;
                //console.log(this.BoolflixList);
            })
            .catch(error => {
                console.log(error);
            });
    },


})