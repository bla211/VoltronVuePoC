<template>
  <div id="app">
    <header-c></header-c>
    <product-nav></product-nav>
    <div id="app-window">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue';
  import ProductNav from './components/ProductNav.vue';
  import Dashboard from './components/Dashboard.vue';
  import Data from './components/Data/Data.vue';

  export default {
    components: {
      'header-c': Header,
      'product-nav': ProductNav,
      'dashboard': Dashboard,
      'data-module': Data
    },
    name: 'app',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    background: #000;
  }

  #app-window{
    width: calc(100vw - 100px);
    float: right;
    padding: 20px;
    color: white;
  }
</style>
