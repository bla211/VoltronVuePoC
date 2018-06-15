<template>
  <div id="ui">
    <chart></chart>
    <search-criteria></search-criteria>
  </div>
</template>

<script>
import Chart from './Chart.vue';
import SearchCriteria from './SearchCriteria.vue';

export default {
  components: {
    'chart': Chart,
    'search-criteria': SearchCriteria,
  },
  computed: {
    dataStore(){
      return this.$store.state.dataModule.state;
    },
    settingsStore(){
      return this.$store.state.settingsModule.state;
    },
  }
}
</script>

<style scoped lang="scss">
  #ui{
    width: calc(100vw - 400px);
    height: calc(100vh - 36px);
    position: fixed;
    top: 36px;
    right: 0;
    z-index: 97;
    background-color: #000;
  }
</style>
