<script>
export default {
    name: 'CardSeries',
    data() {
        return {
            flag_url: 'https://www.countryflagicons.com/FLAT/64/',
            imgMissing: true,
            error_flag: 'src/assets/img/missing_flag.png'
        }
    },
    props: [
        'seriesPoster',
        'seriesName',
        'seriesOriginalName',
        'seriesOriginalLanguage',
        'seriesVoteAverage',
    ],
    methods: {
        getFlag() {
            const flag = this.seriesOriginalLanguage[0].toUpperCase();
            if (flag === 'JA') {
                return this.flag_url + 'JP.png';
            } else if (flag === 'EN') {
                return this.flag_url + 'GB.png';
            } else {
                return this.flag_url + flag + '.png';
            }
        },
        pictureLoadingError() {
            this.imgMissing = false
        }
    }

}
</script>

<template>
    <div class="d-flex flex-column col-2 g-3">
        <div class="card">
            <img v-if="imgMissing" class="img-fluid" :src="'https://image.tmdb.org/t/p/w780/' + `${seriesPoster}`"
                @error="pictureLoadingError()" alt="">
            <img v-else class="img-fluid" :src="error_flag" />

            <h1>{{ seriesName }}</h1>
            <h2>{{ seriesOriginalName }}</h2>
            <p>{{ seriesOriginalLanguage[0] }} {{ seriesVoteAverage / 2 }}</p>
            <img v-if="imgMissing" class="flag" :src="getFlag()" @error="pictureLoadingError()" alt="">
            <img v-else class="flag" :src="error_flag" />


        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    width: 64px;
}
</style>
