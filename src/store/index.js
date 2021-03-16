import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keyword: "",
        totalTvCount: window.localStorage.getItem('totalTvCount')
    },

    mutations: {
        setKeyword(state, payload) {
            state.keyword = payload;
        }
    },

    actions: {
    },

    modules: {
    }
})
