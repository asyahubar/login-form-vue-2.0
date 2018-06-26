<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
   created() {
      if ( this.agCookie.read('signedIn') !== true) {
          window.location.replace(' http://localhost:8080/#/login')
      }
   },
   data() {
      return {
          lightBackground: true
      }
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
    color: #2c3e50;
    min-height: 100vh;
    box-sizing: content-box;
  }
</style>
