import Vue from 'vue';
import Vuex from 'vuex';
import dataModule from './modules/data';
import settingsModule from './modules/settings';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingsStore: settingsModule,
    dataStore: dataModule,
  },
  modules:{
    settingsModule: settingsModule,
    dataModule: dataModule,
  }
})
