<template>
    <div id="app">
          <Home></Home>
    </div>
</template>

<script>
import Home from '@/views/Home.vue'
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({

  }),
};
</script>

<style>
  #app {
    overflow-y: hidden;
    position: absolute;
    margin: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url("assets/forestsketch.jpg");
  }
</style>
