<template>
  <div id="filter-menu">
    <div class="data-menu-section-head drop-control asset-class-drop-control">
      <span>Universal FIlters</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    dataStore(){
      return this.$store.state.dataStore.state;
    },
    settingsStore(){
      return this.$store.state.settingsModule.state;
    },
    ...mapGetters({

    })
  },
  methods: {
    ...mapActions(
      'dataModule', ['openChild']
    ),
    isOpenedChild: function(childId){
      const isOpen = (this.$store.state.dataStore.state.openedChildren).indexOf(childId);
      if (isOpen > -1)
        return true;
    }
  }
}
</script>

<style scoped lang="scss">
  #data-sidebar{
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 100px;
    z-index: 97;
    background-color: #262626;
  }
</style>
