<template>
  <div id="app">
    <main class="main-container unlock-logo jumbotron">
      <div class="stars">
        <div class="twinkling">
          <Navbar />
          <router-view></router-view>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  
}


/* ------------------------------------------- JUMBOTRON */
/*----------- Stars animation */
@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.main-container {
  height: 90vh;
  margin: 0px;
  padding: 0px;
  width: 100vw;
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background: #010E1D url(http://img4.hostingpics.net/pics/144421stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url('./assets/images/blur.png') repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 240s linear infinite;
  -ms-animation:move-twink-back 240s linear infinite;
  -o-animation:move-twink-back 240s linear infinite;
  -webkit-animation:move-twink-back 240s linear infinite;
  animation:move-twink-back 240s linear infinite;
}

</style>
