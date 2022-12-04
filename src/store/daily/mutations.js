import Vue from "vue";

export default {
    fetchErrInfo(state, { id, info }){
        Vue.set(state.error, id, info);
    },
    fetchUserList(state, { list }){
        Vue.set(state.userList, "list", list);
    }
};
