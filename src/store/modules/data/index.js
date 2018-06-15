import dataState from './state';
import dataGetters from './getters';
import dataActions from './actions';
import dataMutations from './mutations';

export default {
  namespaced: true,
  state: dataState,
  getters: dataGetters,
  actions: dataActions,
  mutations: dataMutations
};
