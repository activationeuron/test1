import request from "@/utils/request";
import router from "../router";
const state = {
    clubData: {},
    allClubs: [],
    allEvent: [],
    clubRegData: [],
    clubPlayers: []
};

const getters = {
    currentData: (state) => state.clubData || null,
    clubRegistrationData: (state) => state.clubRegData,
    currentEvents: (state) => state.allEvent,
    clubPlayers: (state) => state.clubPlayers
};

const actions = {
    // async getClub({ commit }, requestData) {


    // },
    async clubMeta({ commit }) {
        try {
            const clubData = await request.get("/club/allclub", { params: { onlyMeta: true } });
            commit("CLUB_REG_DATA", clubData.data);
        } catch (error) {
            throw new Error(error);
        }
    },

    async myClubDate({ commit, dispatch }) {
        try {
            const clubData = await request.get("/club/me");
            commit("SET_CLUB_DATA", clubData.data);
        } catch (error) {
            throw new Error(error);
        }
    },
    async myClubPlayers({ commit }) {
        try {
            const clubPlayers = await request.get("/club/players", { params: { id: state.clubData._id, playersData: true } });
        } catch (error) {
            throw new Error(error);
        }
    },
    async updateClub({ commit }, updateData) {
        try {

            const club = await request.put(`/club/${state.clubData._id}`, updateData, { clubId: state.clubData._id });
            commit("SET_CLUB_DATA", club.data);
        } catch (error) {
            throw new Error(error);
        }
    },
    // events
    async getAllEvents({ commit }) {
        try {
            const allEvents = await request.get("/event/current-events");
            commit("SET_ALL_EVENT", allEvents.result);
        } catch (error) {
            throw new Error(error);
        }
    },
    // club Players
    async clubPlayers({ commit }, clubId) {
        try {
            const allClubPlayers = await request.get("/club/players", { params: { clubId: clubId } });
            console.log(allClubPlayers);
            commit("CLUB_PLAYERS", allClubPlayers.result.clubPlayers);
        } catch (error) {
            throw new Error(error);
        }
    },
    async registerForEvent({ commit }, registrationDetail) {
        try {
            const registration = await request.post("/event/register-club-players", registrationDetail);
            console.log(registration);
        } catch (error) {
            throw new Error(error);
        }
    }
};

const mutations = {
    SET_CLUB_DATA: (state, payload) => {
        state.clubData = payload;
    },
    CLUB_REG_DATA: (state, payload) => {
        state.clubRegData = payload;
    },
    SET_ALL_EVENT: (state, payload) => {
        state.allEvent = payload;
    },
    CLUB_PLAYERS: (state, payload) => {
        state.clubPlayers = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
