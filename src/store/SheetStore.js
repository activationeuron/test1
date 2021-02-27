import request from "../utils/request";
const state = {

};

const getters = {
};

const actions = {

    async createSheet({ commit }, eventData) {
        request.post("/sheet/createsheet", eventData);
    },

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations,
};
