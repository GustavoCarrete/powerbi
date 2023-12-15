import Vue from 'vue'
import Vuex from 'vuex'
import global from'./modules/global/index.js';
import dashboard from'./modules/dashboard/index.js';
Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        modules: {
            global,
            dashboard
        },
    });
};
  
export default createStore;