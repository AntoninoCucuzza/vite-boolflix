<script>
export default {
    name: 'CardFilm',
    data() {
        return {

        }
    },
    props: [
        'filmTitle',
        'filmOriginalTitle',
        'filmOriginalLanguage',
        'filmVoteAverage',
    ]

}
</script>

<template>
    <div class="d-flex flex-column col-6 g-3">
        <div class="card">
            <!--   <img :src="filmImg" alt=""> -->
            <h1>{{ filmTitle }}</h1>
            <h2>{{ filmOriginalTitle }}</h2>
            <p>{{ filmOriginalLanguage }} {{ filmVoteAverage }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>