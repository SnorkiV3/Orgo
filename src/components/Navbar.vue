<template>
  <div id="#app">
    <div class="left-navigation">
      <div>
        <button class="btn btn-outline-secondary homeBtn">
          <i class="fas fa-home"></i>
        </button>
      </div>
      <div>
        <button class="btn btn-outline-secondary">
          <i class="far fa-list-alt" style="padding-right: 0.7rem"></i>
          <strong>Boards</strong>
        </button>
      </div>
    </div>
    <div class="brand">
      <div>
        <button class="brand-img">
          <i class="fas fa-columns fa-2x"></i>
        </button>
      </div>
    </div>
    <div class="right-navigation">
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.brand-img:hover{
  opacity: 40%;
}
.left-navigation {
  padding: 0.6rem;
  display: inline-flex;
  flex-wrap: unset;
  justify-content: flex-start;
}
.brand {
  display: inline-flex;
  justify-content: space-between;
  align-content: center;
}
.homeBtn {
  margin-right: 0.6rem;
}
</style>