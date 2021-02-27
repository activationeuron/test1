import request from "../utils/request";
import { setToken, getToken } from "../utils/auth";
import router from "../router/index";
const state = {
  allClubs: [],
  userToken: getToken(),
  userData: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
  role: ""
};

const getters = {
  getRegistrationClub: (state) => state.allClubs,
  user: state => state.userData,
  token: state => state.userToken,
  getProfileId: (state) => state.userData.profileId
};

const actions = {
  // async login({ commit }, email, password) {
  //   await graphql.query({
  //     query: gql`
  //     query login(input:{$email:String,$password:String}){
  //       login(email:$email,password:$password){
  //         token
  //       }
  //     }
  //   `,
  //     variables: {
  //       email: email,
  //       password: password,
  //     }

  //   })
  // }
  async login({ commit, dispatch }, loginData) {
    try {

      const response = await request.post("/auth/login", loginData);
      console.log(response);
      commit("SET_TOKEN", response.token);
      commit("SET_ROLE", response.role);
      if (response.success) {
        if (response.role === "clubadmin") {
          router.push({ path: "/club" });
        }
        if (response.role === "player") {
          router.push({ path: "/player" });
        }
        if (response.role === "admin") {
          router.push({ path: "/admin" });
        }

      }

    } catch (error) {
      throw new Error(error);
    }

  },
  async registerInd({ commit, dispatch }, indData) {
    try {
      const response = await request.post("/auth/registerind", indData);
    } catch (error) {
      throw new Error(error);
    }
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token);
  },

  async register({ commit }, userData) {


  },
  async registerClub({ commit }, registrationData) {
    console.log(registrationData);
    request.post("/auth/registerclub", registrationData);
  },
  async getClubs({ commit }, flag) {

  },

  async accountData({ commit }) {
  },
  async logout({ commit }) {

  },
  async adminRegister({ commit }, adminData) {
    const response = await request.post("/auth/register-admin", adminData);
    alert(response.result);
  }

};

const mutations = {

  SET_LOGIN_DATA: (state, payload) => { },
  SET_ALL_CLUBS: (state, payload) => {
    state.allClubs = payload.clubs;
  },
  SET_USER_TOKEN: (state, payload) => {
    state.userToken = payload;
  },
  REMOVE_TOKEN: (state, payload) => {
    state.userToken = null;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
    setToken(token);
  },
  SET_USER: (state, data) => {
    state.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  },
  SET_ROLE: (state, data) => {
    state.role = data;
    localStorage.setItem("role", data);
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
};
