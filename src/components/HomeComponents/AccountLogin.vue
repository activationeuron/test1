<template>
  <div class="bg-white xl:w-1/4 md:w-3/5  rounded-md shadow">
    <div class="flex justify-between mx-10 items-center pb-5 pt-5">
      <div class="text-xl  font-bold text-gray-700 ">
        Registration for Club
      </div>
      <div @click="toggleLogin()" class="cursor-pointer">
        <icons name="close" />
      </div>
    </div>
    <div class="text-xl font-bold text-gray-700">
      <div class="w-ful">
        <div class="flex justify-between px-10 pt-2 ">
          <div class="mt-6 flex flex-col w-full">
            <label
              for="email"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >E-mail</label
            >
            <input
              type="email"
              v-model="loginData.email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />

            <label
              for="password"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Password</label
            >
            <input
              type="password"
              name="password"
              placeholder="********"
              v-model="loginData.password"
              autocomplete="new-password"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />

            <button
              type="submit"
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-800 hover:shadow-none"
              @click="login"
            >
              Login
            </button>
            <p
              class="flex py-5 justify-between  mt-4 text-xs text-gray-700 cursor-pointer hover:text-black"
            >
              Don't Have Account?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
export default {
  components: { Icons },
  data: () => {
    return {
      loginData: {
        clubName: '',
        name: '',
        email: '',
        password: '',
        confirm: '',
      },
    };
  },
  name: 'club-registartion',
  methods: {
    toggleLogin() {
      console.log('clicked');
      this.$emit('toggleLogin');
    },
    login() {
      this.$store.dispatch('login', this.loginData);
    },
  },
};
</script>

<style></style>
