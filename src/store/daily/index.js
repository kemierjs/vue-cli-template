import getters from "@/store/daily/getters.js";
import mutations from "@/store/daily/mutations.js";
import state from "@/store/daily/state.js";
import actions from "@/store/daily/actions.js";
export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
}
