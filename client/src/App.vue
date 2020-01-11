<template>
    <div>
          <router-view></router-view>
    </div>
</template>

<script>
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'App',

  components: {
  },

  data: () => ({

  }),
};
</script>

<style scoped>
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
