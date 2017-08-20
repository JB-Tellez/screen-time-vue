<template>
  
    
      <div class="wrapper">
        <div class="container">
          <form class="form" >
            <input type="text" placeholder="Name"  name="name">
            <input type="password" placeholder="Password"  name="password">
            <button type="submit" id="login-button">Login</button>
            <p class="signup"> If your family is not registered. <a class="signup-link">Sign Up Here</a></p>
          </form>
        </div>
      </div>
   

	
</template>

<script>
export default {
  
}
</script>
<style scoped>

body {
  font-family: 'Montserrat', sans-serif; 
  color: white;
  font-weight: 300;
}

body ::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: 'Montserrat', sans-serif; 
  color: white;
  font-weight: 300;
}

body :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: 'Montserrat', sans-serif; 
  color: white;
  opacity: 1;
  font-weight: 300;
}

body ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: 'Montserrat', sans-serif; 
  color: white;
  opacity: 1;
  font-weight: 300;
}

body :-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-family: 'Montserrat', sans-serif; 
  color: white;
  font-weight: 300;
}

.wrapper {
  position: absolute;
  top: 55%;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: -200px;
  overflow: hidden;
}

.wrapper.form-success .container h1 {
  -webkit-transform: translateY(85px);
          transform: translateY(85px);
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
}

.container h1 {
  font-size: 40px;
  -webkit-transition-duration: 1s;
          transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
          transition-timing-function: ease-in-put;
  font-weight: 200;
}

.img-responsive {
  margin: 10% auto;
}

form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}

form input {
  -webkit-appearance: none;
     -moz-appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
  font-weight: 300;
}

form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

form input:focus {
  background-color: white;
  width: 300px;
  color: #2EF9A0;
}

form button {
  -webkit-appearance: none;
     -moz-appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #2EF9A0;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}

form button:hover {
  background-image: -webkit-linear-gradient(top left, #0cb49b 0%, #4CC1FC 100%);
  background-image: -moz-linear-gradient(top left, #0cb49b 0%, #4CC1FC 100%);
  background-image: -o-linear-gradient(top left, #0cb49b 0%, #4CC1FC 100%);
  background-image: linear-gradient(to bottom right, #0cb49b 0%, #4CC1FC 100%);
  text-decoration: none !important;
}

p.signup {
  color: white;
  margin-top: 30px;
  font-size: 16px;
}

a.signup-link:hover{
  color: #EF4D7B;
  text-decoration: none !important;
  cursor: pointer;
}
</style>


