import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalData: {
        fname : "Mas",
        lname : "Azhar",
        email : "mas@gmail.com",
        mobile : 8953798385,
        myOffer : 55555,
        years : 2021,
        make : "Maruti",
        model : 2018,
        condition : "Good",
        milage : 45,
        vin : 456789,
        message : " Hi I am Azhar"
    }
  },

  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },

    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },

  mutations: {
    GET_VALUE(state, item) {
        console.log(item.key , item.value)
        if(item.key == "fname"){
            state.modalData.fname = item.value;
        }
        if(item.key === "lname"){
            state.modalData.lname = item.value;
        }
        if(item.key === "email"){
            state.modalData.email = item.value;
        }
        if(item.key === "mobile"){
            state.modalData.mobile = item.value;
        }
        if(item.key === "myOffer"){
            state.modalData.myOffer = item.value;
        }
        if(item.key === "years"){
            state.modalData.years = item.value;
        }
        if(item.key === "make"){
            state.modalData.make = item.value;
        }
        if(item.key === "model"){
            state.modalData.model = item.value;
        }
        if(item.key === "condition"){
            state.modalData.condition = item.value;
        }
        if(item.key === "milage"){
            state.modalData.milage = item.value;
        }
        if(item.key === "vin"){
            state.modalData.vin = item.value;
        }
        if(item.key === "message"){
            state.modalData.message = item.value;
        }
    }
  },
  actions: {
    getValueFromInputField({ commit }, item) {
        commit('GET_VALUE', item);
    },
    getValueFromDropdown({ commit }, item) {
        commit('GET_VALUE', item);
    },
  }
});