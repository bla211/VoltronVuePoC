<template>
  <div id="nav-contact" title="Contact" class="nav-link">
    Contact
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
