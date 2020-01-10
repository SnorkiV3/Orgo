<template>
  <div>

    <button class="ui secondary button">
  Okay
</button>
<button class="ui button">
  Cancel
</button>



    <h1 v-bind:title="message">{{title}}</h1>
    <div style="margin: 0 auto; width: 50%;">
      <ul>
        <li v-for="(joke, index) in jokes" :key="index">{{joke}}</li>
      </ul>
    </div>
    <button v-on:click="reverseMessage">OKAY BUDDY</button>

    <p>{{content}}</p>
    <input v-model="content" />
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      title: "Good enough",
      message: "Loaded on " + new Date().toLocaleString(),
      jokes: ["One barrel", "Two barrels", "Three barrels"],
      content: "Input something"
    };
  },
  methods: {
    reverseMessage() {
      this.title = this.title
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>



<style scoped>
h1 {
  font-size: 50px;
  font-weight: 300;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>