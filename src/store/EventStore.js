import gql from 'graphql-tag';
const state = {
    allEvents: [],
    createdEvent: {}
};

const getters = {
};

const actions = {
    async eventCreate({ commit }, eventData) {

    }
    ,
    async getEvents({ commit }) { }
};

const mutations = {
    EVENT_CREATED: (state, payload) => {
        state.createdEvent = payload.createEvent;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
