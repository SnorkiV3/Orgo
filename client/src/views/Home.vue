<template>
  <div id="app">
    <div class="home">
      <Navbar></Navbar>

      <div class="board">
        <div class="list-wrapper">
          <Card></Card>
        </div>
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

  #app {
    overflow-y: hidden;
    position: absolute;
    margin: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url("../assets/forestsketch.jpg");
  }
.board {
  position: absolute;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  bottom: 0;
  right: 0;
  left: 0;
  top: 4rem;
}

.list-wrapper {
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}
.body {
  text-align: center;
}
</style>