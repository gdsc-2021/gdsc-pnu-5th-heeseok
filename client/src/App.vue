<template>
<div id="app">
  <head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, user-scalable=yes, minimum-scale=0.25">
    <title>GDSC PNU Homepage Demo</title>
  </head>
  <div class="doc_wrap">
    <Header />
    <router-view />
    <Footer v-if="$route.name !== 'Main'"></Footer>
  </div>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    //Main
  },
}
</script>

<style>
/* body { margin: 0 !important;} */

body { margin: 0 !important; -ms-overflow-style: none;}
body::-webkit-scrollbar{display: none;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.doc_wrap{position:relative;overflow:hidden;min-width:100%;min-height: 100%;}
</style>
