import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state.js";
import getters from "@/store/getters.js";
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";
import city from "@/store/daily"
Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules:{
		city
	}

})
export default store
