<template>
  <div id="asset-menu">
    <div class="data-menu-section-head drop-control asset-class-drop-control">
      <span>Asset Class</span>
    </div>
    <ul class="options">
      <li v-for="fundType in dataStore.fundTypes">
        <div class="menu-item-container">
          <i class="material-icons menu-add">add</i>
            <template>
              <i v-if="isOpenedChild('fundType_' + fundType.FTYPEID)" @click="openChild('fundType_' + fundType.FTYPEID)" class="material-icons menu-drop">keyboard_arrow_down</i>
              <i v-else @click="openChild('fundType_' + fundType.FTYPEID)" class="material-icons menu-drop">keyboard_arrow_right</i>
            </template>
          <i class="material-icons menu-more">more_vert</i>
          <div class="menu-name" @click="openChild('fundType_' + fundType.FTYPEID)">{{ fundType.DisplayName }}</div>
        </div>
        <ul v-show="isOpenedChild('fundType_' + fundType.FTYPEID)" class="options market-options">
          <li v-for="marketType in dataStore.marketTypes[fundType.FTYPEID]">
            <div class="menu-item-container">
              <i class="material-icons menu-add">add</i>
              <i class="material-icons menu-drop">keyboard_arrow_right</i>
              <i class="material-icons menu-more">more_vert</i>
              <div class="menu-name">{{ marketType.ExportName }}</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
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
