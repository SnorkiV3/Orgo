<template>
  <div>
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
.board{
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