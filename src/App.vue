<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Login></Login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
      // HelloWorld,
      Login
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Quicksand:500|Roboto:100');

  body {
    margin: 0;
    padding: 0;
    background-color: #DFE0E3;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
