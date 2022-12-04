import { get } from "@/utils/request.js";

export default {
    fetchUserList: ({ commit }) => {
        return new Promise((resolve, reject) => {
            get("/user/list").then((result) => {
                commit("fetchUserList", { list: result });
                resolve();
            }).catch((message) => {
                commit("fetchErrInfo", { id: "fetchErrInfo", info: message });
                reject();
            });
        });
    }
};
