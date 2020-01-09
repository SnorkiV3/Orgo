<template>
  <div id="#app">
    <div class="navigation">
      <div class="navigation-link">
          <button class="btn btn-outline-secondary homeBtn">
            <i class="fas fa-home"></i>
          </button>
          <button class="btn btn-outline-secondary">
            <i class="far fa-list-alt" style="padding-right: 0.7rem"></i>
            <strong>Boards</strong>
          </button>
      </div>
        <div class="brand">
          <button class="brand-img">
            <i class="fas fa-columns fa-2x"></i>
          </button>
        </div>
      <div class="navigation-link">
        <button class="btn btn-outline-secondary homeBtn">
          <i class="fas fa-home"></i>
        </button>
        <button class="btn btn-outline-secondary homeBtn">
          <i class="fas fa-home"></i>
        </button>
        <button class="btn btn-outline-secondary homeBtn">
          <i class="fas fa-home"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.brand-img:hover {
  opacity: 40%;
}
.navigation{
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.brand{
  flex: 5;
}
.navigation-link{
  flex: 1;
  
}
/* .left-navigation {
  padding: 0.6rem;
  display: inline-flex;
  align-content: flex-start;
}
.brand {
  display: inline-flex;
  align-content: center;
}
.right-navigation {
  padding: 0.6rem;
  display: inline-flex;
  align-content: flex-end;
} */
.homeBtn {
  margin-right: 0.6rem;
}
</style>