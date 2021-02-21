<template>
  <div class="bg-white xl:w-1/4 md:w-3/5  rounded-md shadow">
    <div class="flex justify-between px-10 py-10">
      <div class="text-xl font-bold text-gray-700">
        Registration for Individual
        <div>
          <form class="mt-6">
            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <label
                  for="firstname"
                  class="block text-xs font-semibold text-gray-600 uppercase"
                  >Firstname</label
                >
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="John"
                  autocomplete="given-name"
                  v-model="indData.name"
                  class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
                  required
                />
              </span>
              <span class="w-1/2">
                <label
                  for="lastname"
                  class="block text-xs font-semibold text-gray-600 uppercase"
                  >Lastname</label
                >
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  autocomplete="family-name"
                  v-model="indData.lastName"
                  class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
                  required
                />
              </span>
            </div>
            <label
              for="email"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >E-mail</label
            >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              v-model="indData.email"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <label
              for="password"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Password</label
            >
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              v-model="indData.password"
              autocomplete="new-password"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <label
              for="password"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Select your club
            </label>
            <select v-model="indData.clubId" class="w-full py-1">
              <template v-for="club in clubs">
                <option :value="club._id" :key="club._id" class="w-full">{{
                  club.clubName
                }}</option>
              </template>
            </select>
            <label
              for="password-confirm"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Confirm password</label
            >
            <input
              id="password-confirm"
              type="password"
              name="password-confirm"
              placeholder="********"
              autocomplete="new-password"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <button
              type="submit"
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-800 hover:shadow-none"
              @click="registerIndividual"
            >
              Sign up
            </button>
            <p
              class="flex justify-between  mt-4 text-xs text-gray-700 cursor-pointer hover:text-black"
            >
              Already registered?
            </p>
          </form>
        </div>
      </div>
      <div @click="toggleRegistration()" class="cursor-pointer">
        <icons name="close" />
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
export default {
  components: { Icons },
  name: 'individual-registartion',
  data: () => {
    return {
      indData: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        clubId: '',
        role: 'player',
      },
    };
  },
  methods: {
    toggleRegistration() {
      console.log('clicked');
      this.$emit('toggleReg');
    },
    getClub() {
      this.$store.dispatch('clubMeta');
    },
    registerIndividual() {
      this.$store.dispatch('registerInd', this.indData);
    },
  },
  mounted() {
    this.getClub();
  },
  computed: {
    clubs: function() {
      return this.$store.getters.clubRegistrationData;
    },
  },
};
</script>

<style></style>
