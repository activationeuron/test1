import Vue from "vue";
import Vuex from "vuex";
import AdminStore from "./AdminStore";
import AuthStore from "./AuthStore";
import EventStore from "./EventStore";
import ClubStore from "./ClubsStore";
import SheetStore from "./SheetStore";
Vue.use(Vuex);

const store = new Vuex.Store({
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    }
  },
  modules: {
    AdminStore,
    AuthStore,
    EventStore,
    ClubStore,
    SheetStore
  }
});

store.subscribe((mutation, state) => {


  localStorage.setItem('store', JSON.stringify(state));
});






export default store;