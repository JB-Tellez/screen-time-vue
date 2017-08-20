<template>
    <div class="wrapper row interactive-row container-fluid">
        <div class="row" v-if="!showMovies">
            <!-- <p class="choose-movie-p">Start watching</p> -->
            <a class="movie-selection" @click="gotoMovies">
                <img src="../assets/images/movie.png" class="movie img-select img-responsive">
            </a>
        </div>
        <div v-if="showMovies" class="row">
            <div class="col-md-12">
                <MovieList />
                <!-- <app-movies></app-movies> -->
            </div>
        </div>
    </div>
</template>
<script>

import MovieList from './MovieList.vue'

export default {
    data() {
        return {
            showMovies: false
        }
    },
    methods: {

        gotoMovies: function (event) {
            this.showMovies = true
        }
    },
    components: { MovieList }
}
</script>
<style scoped>

</style>
