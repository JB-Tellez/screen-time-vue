<template>
  
      <!-- FUNCTIONALITIES -->
      <div class="container main-container">

        <div class="row greeting-row">
          <!-- LEFT COLUMN  -->
          <div class="container col-sm-12 col-md-6 col-lg-6 left-col">
            <h1 class="greet greeting"> Hi,  <span class="kidname"> {{ kid.name }} </span> </h1>
            <p class="greet greeting-p"> What would you like to watch ? </p>
          </div>
          <!-- RIGHT COLUMN -->
          <!-- <div class="container col-sm-12 col-md-6 col-lg-6 right-col">
            <div class="row">
              <p class="recap-line-one col-sm-12 col-md-12 col-lg-12 today"> Today is <span class="date"> {{ today | date}}  </span></p>
            </div>
            <div class="row">
              <img src="../../../assets/images/bedtime.png" class="small-icon col-sm-3 col-md-3 col-lg-3">
              <p class="recap col-sm-9 col-md-9 col-lg-9"> Bedtime is at <span class="bedtime"> {{ getBedtime(kid) | date :'shortTime' }} </span> </p>
            </div>
            <div class="row">
              <img src="../../../assets/images/xs-screentime-logo.png" class="logo-xs col-sm-3 col-md-3 col-lg-3">
              <p class="screentime-recap col-sm-9 col-md-9 col-lg-9"> <span class="minutes-count"> {{ getRemainingTime(kid) }} </span> minutes</p>
            </div>
          </div> -->
        </div>

        <InteractiveWrapper />
        <!-- interactive-wrapper here -->
        <!-- <app-interactive-wrapper></app-interactive-wrapper> -->
        
      </div>
 
</template>
<script>
import InteractiveWrapper from './InteractiveWrapper.vue'
export default {

    data () {
        return {
            kid: { name: 'Bar'}
        }
    },
    components: { InteractiveWrapper }
  
}
</script>
<style scoped>

/* --------------------------------------------BODY */
.main-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}

.greeting-row {
    color: #2EF9A0;
}

.kidname {
    text-transform: uppercase;
    color: #4CC1FC;
    font-family: Godsown;
}

.greeting-p {
    margin-top: 20px;
    margin-left: 5px;
    color:white;
    font-family: 'Montserrat', sans-serif; 
}

.left-col {
    float: left;
    width: 50%;
    margin-top: 10%;
    margin-left: 5%;
}

/* RIGHT COLUMN */
.right-col {
     border: 2px dotted #0CB49B; 
      padding: 15px 0px;  
    width: 28%;
    color: white;
    position: absolute;
    left: 68vw;
    top: 15%;
    /* text-align: center; */

}

p.today {
    font-size: 24px !important;
}

.recap {
    font-size: 20px;
}

span.date {
    color: #4CC1FC;
    font-weight: 500;
}

.small-icon {
    width: 30px;
    /* margin-right: 10px; */
}

.bedtime {
    color: #4CC1FC;
    font-weight: 500;
}

.logo-xs {
    height: 15px;
    width: auto;
    float: left;
}

/* .screentime-recap {
    position: absolute;
    left: 24%;
    top: 72%;
} */

.minutes-count {
    color: #4CC1FC;
    font-weight: 500;
}

</style>


