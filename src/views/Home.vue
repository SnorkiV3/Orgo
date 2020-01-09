<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="body">
      <h1>OKAY BUDDY</h1>
    </div>
    <Timeline></Timeline>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue"
import Timeline from '@/components/Timeline.vue'

export default {
  name: "home",
  components: {
    Navbar,
    Timeline
  }
};
</script>

<style scoped>
  .body{
    text-align: center;
  }
</style>