import request from "@/utils/request";
const state = {
    clubData: {},
    allClubs: [],
    clubRegData: []
};

const getters = {
    currentClubData: (state) => state.clubData,
    clubRegistrationData: (state) => state.clubRegData
};

const actions = {
    async getClub({ commit }, requestData) {


    },
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
            dispatch("myClubPlayers");
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    async myClubPlayers({ commit }) {
        try {
            const clubPlayers = await request.get("/club/players", { params: { id: state.clubData._id, playersData: true } });
            commit("");
        } catch (error) {
            throw new Error(error);
        }
    },
    async updateClub({ commit }, updateData) {
        try {

            const club = await request.put(`/club/${state.clubData._id}`, updateData, { clubId: state.clubData._id });
            console.log(club);
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
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
