<template>
  <div>
    <div class="home">
      <Navbar></Navbar>
      <div class="body">
              <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
// import Timeline from '@/components/Timeline.vue'

export default {
  name: "home",
  components: {
    Navbar,
    Card
  }
};
</script>

<style scoped>
.body {
  text-align: center;
}
</style>