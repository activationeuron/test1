import request from "../utils/request";
const state = {
    allEvents: [],
    createdEvent: {},
    levelSheets: []
};

const getters = {
};

const actions = {
    async createEvent({ commit }, eventData) {
        console.log(eventData);
        try {

            await request.post("/event/create-event", eventData);

        } catch (error) {
            throw new Error("Fail To Create Event");
        }
    },
    async getEvents({ commit }) { }
};

const mutations = {
    EVENT_CREATED: (state, payload) => {
        state.createdEvent = payload.createEvent;
    },
    SET_SHEETS: (state, payload) => {
        state.levelSheets = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
