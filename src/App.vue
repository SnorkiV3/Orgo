<template>
  <v-content>
    <Home></Home>
  </v-content>
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
        bars: [
      { class: '' },
      { class: '', dark: true },
      { class: 'primary', dark: true },
      { class: 'elevation-0' },
    ],
  }),
};
</script>
