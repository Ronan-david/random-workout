import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Settings: {}
  },
  mutations: {
    SET_MUSCLES_SETTINGS_JSON: (state, payload) => {
      state.Settings.muscles = payload
    },
    SET_LOCATION_SETTINGS_JSON: (state, payload) => {
      state.Settings.location = payload
    },
    SET_LEVEL_SETTINGS_JSON: (state, payload) => {
      state.Settings.level = payload
    },
    SET_TIMING_SETTINGS_JSON: (state, payload) => {
      state.Settings.timing = payload
    }
  },
  actions: {
    setMusclesSettings: ({ commit }, payload) => {
      commit('SET_MUSCLES_SETTINGS_JSON', payload)
    },
    setLocationSettings: ({ commit }, payload) => {
      commit('SET_LOCATION_SETTINGS_JSON', payload)
    },
    setLevelSettings: ({ commit }, payload) => {
      commit('SET_LEVEL_SETTINGS_JSON', payload)
    },
    setTimingSettings: ({ commit }, payload) => {
      commit('SET_TIMING_SETTINGS_JSON', payload)
    }
  },
  getters: {
    getChosenSettings: state => state.Settings
  }
})
