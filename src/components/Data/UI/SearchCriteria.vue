<template>
  <div id="search-criteria">
    <div id="header-bar">
      <h3>Search Criteria</h3>
      <div id="clear">
        Clear
      </div>
    </div>
    <div id="global">
      <div id="global-frequency" class="global-criteria">
        <label>Frequency</label>
        <span class="value">Daily</span>
      </div>
      <div id="global-date" class="global-criteria">
        <label>Date</label>
        <span class="value">1 Year</span>
      </div>
      <div id="global-output" class="global-criteria">
        <label>Output</label>
        <span class="value">Line Chart</span>
      </div>
      <div id="global-level" class="global-criteria">
        <label>Level</label>
        <span class="value">Aggregate</span>
      </div>
    </div>
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
  #search-criteria{
    width: 100%;
    #header-bar{
      width: 100%;
      float: left;
      padding: 10px 14px;
      color: #fafafa;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 2px;
      text-align: left;
      font-size: 12px;
      background: #212121;
      margin-top: 1px;
      position: relative;
      h3{
        margin: 0;
        padding: 0;
        font-weight: 100;
      }
      #clear{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #212121;
        color: #bf360c;
        border: 0 solid #bf360c;
        text-align: center;
        padding: 0 14px;
        height: 34px;
        line-height: 34px;
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        &:hover{
          color: white;
          background-color: #bf360c;
        }
      }
    }
    #global{
      width: 100%;
      float: left;
      .global-criteria{
        min-height: 40px;
        float: left;
        width: calc(25% - 2px);
        padding: 4px;
        background-color: #333;
        text-align: center;
        letter-spacing: 1px;
        label{
          font-size: 12px;
          color: #999;
          line-height: 14px;
          clear: both;
        }
        .value{
          font-size: 14px;
          color: #fff;
          line-height: 18px;
          width: 100%;
          display: block;
          clear: both;
        }
      }
      #global-frequency{
        margin: 1px 1px 1px 0;
      }
      #global-date{
        margin: 1px;
      }
      #global-output{
        margin: 1px;
      }
      #global-level{
        margin: 1px 0 1px 1px;
      }
    }
  }
</style>
