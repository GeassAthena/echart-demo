<template>
  <div id="app">
    <HelloWorld :title='doc.title' v-on:update:title="doc.title = $event"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import Test from "./components/test";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      doc: {
        title: '我是你爸爸',
        content: '哈哈哈哈哈哈哈哈哈'
      },
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
