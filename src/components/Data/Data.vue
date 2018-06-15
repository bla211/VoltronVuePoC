<template>
  <div id="data-ui">
    <data-menu></data-menu>
    <data-ui></data-ui>
  </div>
</template>

<script>
  import Menu from './Menu/Menu.vue';
  import UI from './UI/UI.vue';

  export default {
    components: {
      'data-menu': Menu,
      'data-ui': UI,
    },
    computed: {
      testData(){
        return this.$store.modules.dataModule;
      },
      settings(){
        return this.$store.modules.settingsModule;
      },
    }
  }
</script>
<style lang="scss">
  header{
    width: calc(100vw - 400px);
  }
</style>
<style scoped lang="scss">
  .price{color: red;}
</style>
