<template>
  
  <b-navbar toggleable type="light" toggle-breakpoint="md">

    <b-nav-toggle target="nav_collapse">foo</b-nav-toggle>

    <b-navbar-brand href="#">
      <img src="../assets/images/xs-screentime-logo.png" alt="">
    </b-navbar-brand>

    <b-nav v-if="showLoginButton" class="ml-auto">
      <b-button variant="success">
        <router-link to="/login">Login</router-link>
      </b-button>
    </b-nav>

  </b-navbar>

</template>

<script>
export default {

  methods: {
    
    onLogin: function(event) {
      this.$router.push('/login');
    }
  },
  computed: {
    showLoginButton() {
      console.log(this.$store.state.route.path);
      return !this.$store.state.loggedIn && this.$store.state.route.path !== '/login';
    }
  }
}
</script>


<style>
nav.navbar {
  background-color: black;
  z-index: 2;
}
</style>