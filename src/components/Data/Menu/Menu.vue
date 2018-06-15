<template>
  <div id="data-menu">
    <div class="data-set-select">
        <h4>Fund Flows</h4>
        <i class="material-icons">arrow_drop_down</i>
    </div>
    <asset-menu></asset-menu>
    <filter-menu></filter-menu>
  </div>
</template>

<script>
import AssetMenu from './AssetMenu.vue';
import FilterMenu from './FilterMenu.vue';

export default {
  components: {
    'asset-menu': AssetMenu,
    'filter-menu': FilterMenu,
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
<style lang="scss">
  .data-menu-section-head{
    color: #fafafa;
    font-weight: 200;
    letter-spacing: 1px;
    cursor: pointer;
    width: 100%;
    float: left;
    padding: 3px 0 3px 31px;
    background-color: #212121;
    border-top: 1px solid #212121;
    font-size: 10px;
    position: relative;
    top: -1px;
    margin-top: 1px;
    text-transform: uppercase;
    z-index: 1;
  }

  .options{
    float: left;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #373a47;
    color: #c4c4c4;
    li{
      display: block;
      float: left;
      width: 100%;
      position: relative;
      .menu-item-container{
        float: left;
        width: 100%;
        &:hover .menu-add{
          opacity: .25;
        }
        &:hover .menu-more{
          opacity: .25;
        }
        &:hover .menu-drop{
          opacity: 1;
        }
        .menu-name{
          width: 100%;
          float: left;
          padding: 11px 10px 10px 31px;
          text-align: left;
          overflow: hidden;
          font-size: 14px;
          cursor: pointer;
        }
        .menu-add{
          position: absolute;
          right: 0;
          line-height: 36px;
          text-align: center;
          height: 100%;
          width: 30px;
          font-size: 20px;
          opacity: 0;
          cursor: pointer;
          &:hover{
            opacity: 1;
            color: #7bb042;
          }
        }
        .menu-more{
          position: absolute;
          right: 20px;
          line-height: 36px;
          text-align: center;
          height: 100%;
          width: 25px;
          opacity: 0;
          cursor: pointer;
          &:hover{
            opacity: 1;
          }
        }
        .menu-drop{
          position: absolute;
          left: 0;
          line-height: 36px;
          text-align: center;
          height: 100%;
          width: 30px;
          font-size: 20px;
          opacity: .25;
          cursor: pointer;
        }
      }
    }
  }


  .market-options .menu-name{
    padding: 11px 65px 10px 41px !important;
  }
  .market-options .menu-drop{
    left: 10px !important;
  }

</style>

<style scoped lang="scss">
  #data-menu{
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 100px;
    z-index: 97;
    background-color: #262626;
  }
  .data-set-select{
    width: 100%;
    padding: 14px 24px 14px 31px;
    overflow: hidden;
    line-height: 28px;
    float: left;
    position: relative;
    color: #fafafa;
    background: rgba(123,176,66,.5);
    h4{
      margin: 0;
      float: left;
      text-transform: uppercase;
      font-weight: 200;
      font-size: 12px;
      text-align: left;
      font-family: sans-serif;
      letter-spacing: 1px;
    }

    i{
      position: absolute;
      right: 0;
      height: 56px;
      width: 56px;
      top: 0;
      line-height: 54px;
      text-align: center;
      font-size: 30px;
    }
  }
</style>
