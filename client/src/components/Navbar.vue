<template>
  <div id="navigation-main">
    <div class="navigation">
      <div class="navigation-link">
          <button class="btn btn-outline-light homeBtn">
            <i class="fas fa-home"></i>
          </button>
          <button class="btn btn-outline-light">
            <i class="far fa-list-alt" style="padding-right: 0.7rem"></i>
            <strong>Boards</strong>
          </button>
      </div>
        <div class="brand">
          <button class="brand-img">
            <i class="fas fa-columns fa-2x" style="color: white"></i>
          </button>
        </div>
      <div class="navigation-link">
        <button class="btn btn-outline-light homeBtn">
          <i class="fas fa-plus"></i>
        </button>
        
        <button class="btn btn-outline-light homeBtn">
          <i class="far fa-bell"></i>
        </button>

      <router-link :to="{name: 'signUp'}">
        <button :to="{name: 'signUp'}" class="btn btn-outline-light homeBtn">
          <i class="far fa-user"></i>
        </button>
      </router-link>
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
#navigation-main{
  background: rgba(25, 25, 25, .7);
  position: relative;
  display: block;
  overflow-y: auto;
  z-index: 1;
}
brand-img{
  transition:  0.3;
}
.brand-img:hover {
  opacity: 70%;
}
.navigation{
  padding: 0.6rem 0rem;
  display: flex;
  /* flex-direction: row; */
  text-align: center;
  position: relative;
}
.brand{
  flex: 3;
}
.navigation-link{
  /* flex: 1; */
  margin: 0 1rem;
  align-content: flex-start;
  
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