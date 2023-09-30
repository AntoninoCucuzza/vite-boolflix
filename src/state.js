import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=70c44c389e206232e0acaece4703adc9',

    tv_series_url: 'https://api.themoviedb.org/3/search/tv?api_key=70c44c389e206232e0acaece4703adc9',

    popular_tv_url: 'https://api.themoviedb.org/3/tv/popular?api_key=70c44c389e206232e0acaece4703adc9',

    popular_movie_url: 'https://api.themoviedb.org/3/movie/popular?api_key=70c44c389e206232e0acaece4703adc9',


    filmList: [],
    tvSeriesList: [],
    popularMovie: [],
    popularTv: [],

    fetchData() {
        this.fetchSeries()
        this.fetchMovie()

    },

    fetchMovie() {
        axios
            .get(this.movie_url)
            .then(response => {
                this.filmList = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });

    },

    fetchSeries() {

        axios
            .get(this.tv_series_url)
            .then(response => {
                this.tvSeriesList = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });
    }


})