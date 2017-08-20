<template>
  <div>
    <b-carousel id="carousel1"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @slide="onSlide"
                @slid="onSlid"
    >

      <!-- Text slides with image -->
      <b-carousel-slide v-for="movie in movies" :key="movie.id" :caption="movie.name"
                        :img="movie.path"
      ></b-carousel-slide>
      
      </b-carousel>
      </div>
</template>
<script>
export default {
    data () {
        return {
            movies: [
                {name:"Uno", id:1, path:'https://lorempixel.com/1024/480/technics/1/'},
                {name:"Dos", id:2, path:'https://lorempixel.com/1024/480/technics/2/'},
                {name:"Tres", id:3, path:'https://lorempixel.com/1024/480/technics/3/'},
            ]
        }
    }
  
}
</script>
<style scoped>

</style>
