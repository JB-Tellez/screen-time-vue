<template>
  <main class="main-container unlock-logo jumbotron">
  <div class="stars">
    <div class="twinkling">
      <Logo />
      <a class="family-anchor" href="#section-one">
        <img class="family" src="../assets/images/family-icon.png">
        <div class="arrow-circle">
          <img class="arrow" src="../assets/images/arrow.png"> 
        </div>
      </a>
    </div>
  </div>
</main>
</template>
<script>
import Logo from './Logo.vue'
export default {
    components: { Logo }
}
</script>



<style scoped>
/*
Name: Screen Time Web App
Description: Common Styles
Authors: Micaela Linda Villani & JBTellez
Tags: Ironhack Final Project - Full Stack Javascript App + Angularjs for the Front-end
*/

/* Fonts
---headings
font-family: 'Montserrat Alternates', sans-serif;
font-family: 'Merriweather Sans', sans-serif;
--paragraphs
font-family: 'Montserrat', sans-serif; 
font-family: 'Merriweather', serif;
*/

/* ------------------------------------------- FAMILY ICON */
/* family scrolling icon */
a.family-anchor {
  color: #337ab7;
  opacity: 0.5;
  position: absolute;
  left: 47%;
  bottom: 3%;
  text-decoration: none;
  height: 100px;
  width: 100px;
  text-align: center;
}

a.family-anchor:hover {
 opacity: 1;
}

.arrow-circle {
  background-color: white;
  border-radius: 50% !important;
  position: absolute;
  left: 31px;  
  top: 65px;
  height: 40px;
  width: 40px;
}

.arrow {
  position: absolute;
  right: 12px;
  top: 10px;
}

/* ------------------------------------------- SECTION 1 */
/* 1SECTION */
 div.jumbotron.first-section {
  background-image: linear-gradient(to top, #15131B 0%, #01132A 50%, #010B17 100%);
  height: 100vh;  
  margin-top: 90px;
  padding-top: 0px;
  padding-bottom: 0px;
  width:100vw;
  position: relative;
  overflow: scroll;
}

div.section-one-col {
    width: 25%;
    float: left;
    margin-left: 6%;
}

.screen-section {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 95%;  
  z-index: 2;
}

div.section-one-row-one {
  margin: 40px 0 130px 0;
  height: 100px;
}

.what-section-title {
  color: #0CB49B;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 300;
  text-align: center;
  font-size: 35px !important;
}


p.what-section-p {
  color: white;
  font-family: 'Montserrat', sans-serif; 
  font-size: 30px !important;
  font-weight: 500;
  margin-top: 30px; 
  text-align: center;
}

/* -------------------------------- ICONS */
.col-md-4 {
  -webkit-column-span: all;
  -moz-column-span: all;
  column-span: all;
  margin-top: 50px;
}

.icons {
  margin: 0 auto;
}

.icons-titles {
  color: white;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0;
}

.icons-p {
  color: white;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 300;
  text-align: center;
  font-size: 18px !important;
}

div.robot-row{
  height: 200px;
  width: 100vw;
}


a.robot-anchor {
  border: none;
  height: 100px;
  opacity: 0.5;
  margin: 0 auto;
  line-height: 100px;
  position: relative;
  left: 47%;
  top: 50%;
  width: 100px;
  z-index: 3;
}

a.robot-anchor:hover {
  opacity: 1;
}

div.arrow-circle-section1 {
  background-color: white;
  border-radius: 50% !important;
  position: absolute;
  left: 30px;
  top: 60px;
  height: 40px;
  width: 40px;
}

.arrow-section1 {
  position: absolute;
  right: 12px;
  top: 10px; 
}

/* ------------------------------------------- SECTION 2 */
.second-section {
  background-image: -webkit-linear-gradient(#15131b 0%, #1c0b2f 50%, #010913 100%);
  background-image: -moz-linear-gradient(#15131b 0%, #1c0b2f 50%, #010913 100%);
  background-image: -o-linear-gradient(#15131b 0%, #1c0b2f 50%, #010913 100%);
  background-image: linear-gradient(#15131b 0%, #1c0b2f 50%, #010913 100%);
  height: 100vh;  
  margin-top: 26px;
  padding-top: 0px;
  padding-bottom: 0px;
  width:100vw;
  position: relative;
  overflow: scroll;
}

div.section-two-row-one {
  margin: 50px 0 60px 0;
  height: 100px
}

.col-md-3 {
  -webkit-column-span: all;
  -moz-column-span: all;
  column-span: all;
}

.why-section-title {
  color: #EF4D7B;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 300;
  text-align: center;
  margin-top: 70px;
  font-size: 35px !important;
}

.choose-first-row {
  height: 250px;
  width: 1000px;
  text-align: center;
  margin: 0 auto;
  border: 2px dotted #EF4D7B;
  padding: 40px 20px;
  background: #130721;
}

.why-icons {
  height: 100px;
  width: auto;
  margin: 0 40px;
}

.first-icon {
  border: 2px dotted #2EF9A0;
  padding: 20px;
}

.choose-second-row {
  height: 250px;
  width: 1000px;
  text-align: center;
  margin: 80px auto 40px auto;
  border: 2px dotted #EF4D7B;
  padding: 40px 20px;
  background: #130721;
}

.why-icons-second-row {
  height: 100px;
  width: auto;
  margin: 0 25px;
}
 
.first-icon-second-row {
   border: 2px dotted #2EF9A0;
   padding: 20px;
}

.why-icons-p {
  color: white;
  font-family: 'Montserrat', sans-serif; 
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}

/* REGISTER BUTTON */
.register-button {
  margin: 0 auto;
  border: 2px dotted #F37055;
  width: 200px;;
  height: 60px;
  text-align: center;
}

.register-button:hover {
  background-image: -webkit-linear-gradient(top left, #F79432 0%, #EF4D7B 100%);
  background-image: -moz-linear-gradient(top left, #F79432 0%, #EF4D7B 100%);
  background-image: -o-linear-gradient(top left, #F79432 0%, #EF4D7B 100%);
  background-image: linear-gradient(to bottom right, #F79432 0%, #EF4D7B 100%);
  color: white;
  cursor: pointer;
}

a.family-signup {
  font-family: 'Montserrat', sans-serif; 
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  font-size: 18px !important;
  margin-top: 18px;
  text-decoration: none !important;
}



</style>

