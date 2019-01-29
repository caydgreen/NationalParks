import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateCode: '',
    searchResults: [],
  },
  mutations: {
    setQuery(state, stateCode){
      state.stateCode = stateCode;
    },
    setResult(state, results){
      state.searchResults = results;
    },
  },
  actions: {
    doSearch({ commit },  query) {
      api.getParks(query).then((response) => {
        commit('setQuery', query);
        commit('setResult', response.data.data);
      });
    },
  },
});
