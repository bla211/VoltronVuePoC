<template>
  <div id="chart">

  </div>
</template>

<script>
export default {
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
  #chart{
    width: 100%;
    background: #212121;
    height: 400px;
  }
</style>
