import request from "../utils/request";
const state = {
  levelSheets: [],
  clubs: [],
  currentClub: {},
  allEvents: [],
  eventDetails: null
};

const getters = {
  levelSheet: () => state.levelSheets,
  allUnApprovedClubs: () => state.clubs.filter(club => !club.approved),
  currentClub: () => state.currentClub,
  allEventsAdmin: (state) => state.allEvents,
  eventDetailsAdmin: (state) => state.eventDetails
};

const actions = {
  async sheetByLevel({ commit }, eventLevel) {
    try {

      const sheets = await request.get("/sheet/sheet-by-level", { params: { level: eventLevel } });
      commit("EVENT_SHEETS", sheets.result);
    } catch (error) {
      throw new Error("Fail To get sheet for this level");
    }


  },
  async adminGetClubs({ commit }, meta) {
    const clubs = await request.get("/admin/clubs", { params: { meta: meta } });
    commit("SET_CLUBS", clubs.result);
  },
  async getClubDetail({ commit }, clubId) {
    console.log(clubId);
    const clubDetails = await request.get("/admin/club/", { params: { clubId } });
    commit("SET_CURRENT_CLUB", clubDetails.result);

  },
  async activateClub({ commit }, clubId) {
    const activateClub = await request.get("/admin/activateclub", { params: { clubId: clubId } });
    commit("SET_CURRENT_CLUB", activateClub.result);
  },
  async getEventsAdmin({ commit }) {
    try {

      const allEvent = await request.get("/admin/all-event");
      commit("SET_ALL_EVENT", allEvent.result);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getEventDetailAdmin({ commit }, eventId) {
    try {
      const eventDetail = await request.get("/admin/event-details", { params: { eventId } });
      console.log(eventDetail);
      commit("SET_EVENT_DETAILS", eventDetail.result);
    } catch (error) {
      throw new Error(error);
    }
  }
};

const mutations = {
  EVENT_SHEETS: (state, payload) => {
    state.levelSheets = payload;
  },
  SET_CLUBS: (state, payload) => {
    state.clubs = payload;
  },
  SET_CURRENT_CLUB: (state, payload) => {
    state.currentClub = payload;
  },
  SET_ALL_EVENT: (state, payload) => {
    state.allEvents = payload;
  },
  SET_EVENT_DETAILS: (state, payload) => {
    state.eventDetails = payload;
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
};
