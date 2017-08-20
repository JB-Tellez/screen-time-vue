<template>
    <div class="container">
        <!-- TITLE -->
        <div class="row title-row">

            <h1 class="title col-sm-12 col-md-12 col-lg-12"> THE
                <span class="color"> {{ family.name }} </span>
            </h1>
        </div>
        <!-- ICONS -->
        <div class="wrapper">
            <div class="row icons-row">
                <!-- FIRST ICON -->
                <div class="col-sm-12 col-md-4 col-lg-4 icon-col">
                    <a @click="gotoDashboard">
                        <img class="responsive-image icons" src="../assets/images/family-icon-big.png">
                        <p class="icon-p"> Dashboard </p>
                    </a>
                </div>
                <!-- KID ICONS -->
                <div class="col-sm-12 col-md-4 col-lg-4 icon-col">
                    <a @click="gotoKidHome">
                        <img class="responsive-image icons" src="../assets/images/little-girl-icon.png">
                        <p class="icon-p"> {{ kid.name }} </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            family: {
                name: 'Foo'
            },
            kid: {
                name: 'Bar'
            }
        }
    },
    methods: {
        gotoDashboard: function(event) {
            this.$router.push('/family/321/dashboard')
        },
        gotoKidHome: function(event) {
            this.$router.push('/family/321/kid/123')
        }
    }
}
</script>
<style scoped>
/* BODY */


/* TITLE */

.title-row {
    position: relative;
    top: 27%;
    text-align: center;
}

h1.title {
    font-family: Godsown;
    color: white;
    z-index: 1;
    font-size: 65px !important;
    text-transform: uppercase;
}

span.color {
    color: #4CC1FC;
}


/* ICONS */

.wrapper {
    position: relative;
    top: 34%;
    text-align: center;
    color: white;
    background-color: #010F20;
    opacity: 0.8;
    z-index: 1;
}

.icon-col {
    cursor: pointer;
}

div.icon-col:hover {
    opacity: 1;
    -moz-box-shadow: 0 8px 30px 3px #000000;
    -webkit-box-shadow: 0 8px 30px 3px #000000;
    box-shadow: 0 8px 30px 3px #000000;
    padding-top: 20px;
}

.icons {
    height: 280px;
}

.jumbotron p {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 15px;
    margin-top: 20px;
    font-size: 25px;
    font-weight: 200;
    color: white;
    text-transform: uppercase;
}

a:hover {
    text-decoration: none !important;
}
</style>


