<template>
  <div id="nav-alerts" title="Alerts" class="nav-link">
    <i class="material-icons">notifications</i>
  </div>
</template>

<script>

  export default {
    computed: {
      settings(){
        return this.$store.modules.settingsModule;
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
