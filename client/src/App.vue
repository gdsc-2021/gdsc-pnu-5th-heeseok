<template>
<div id="app">
  <div class="doc_wrap">
    <Header />
    <!-- <Main /> -->
    <router-view />
  </div>
</div>
</template>

<script>
import Header from "./components/header.vue";
//import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    //Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.doc_wrap {position:relative;overflow:hidden;min-width:1400px;}
</style>
