<template>
  <header>
    <release-notes></release-notes>
    <alerts></alerts>
    <contact></contact>
    <FAQ></FAQ>
  </header>
</template>

<script>
  import ReleaseNotes from './ReleaseNotes.vue';
  import Alerts from './Alerts.vue';
  import Contact from './Contact.vue';
  import FAQ from './FAQ.vue';

  export default {
    components: {
      'release-notes': ReleaseNotes,
      'alerts': Alerts,
      'contact': Contact,
      'FAQ': FAQ
    },
    computed: {
      settings(){
        return this.$store.modules.settingsModule;
      },
    }
  }
</script>

<style lang="scss">
  .nav-link{
    float: right;
    padding: 0 15px;
    background-color: #111;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    color: #efefef;
    &:hover{
      background: #efefef;
      color: #111;
    }
    &:hover i{
      color: #0e0e0e;
    }
    i{
      color: #efefef;
      line-height: 35px;
    }
  }
</style>
<style scoped lang="scss">
  header{
    float: left;
    height: 36px;
    background: #0e0e0e;
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
  }
</style>
