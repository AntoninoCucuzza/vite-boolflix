        
<script>
export default {
    name: 'SliderMovie',

    data() {
        return {
            activeSlide: 0,

        }
    },
    props: [
        'Poster',
        'id',
    ],
}

</script>

<template>
    <div class="slider-wrapper d-flex col-2 g-3 ">
        <div class="d-flex ">
            <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w500/' + `${Poster}`" alt="" :id="id">
        </div>


    </div>
</template>

<style lang="scss" scoped></style>