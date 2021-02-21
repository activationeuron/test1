<template>
  <div
    class="mx-10 py-10 w-full xl:flex xl:justify-center xl:items-center space-y-2 rounded-sm"
  >
    <div
      class="xl:w-1/2 md:w-full bg-white  flex  rounded-sm px-5 flex-col space-y-3 py-10"
    >
      <div>
        <div>
          <div class="font-bold text-xl text-gray-800">
            Club Registration Details
          </div>
          <div class="text-sm text-gray-500">Details for Registration</div>
        </div>
      </div>
      <!-- form -->
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800"
            >Telephone*</label
          >
          <input
            type="text"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="Telephone"
            v-model="clubData.telePhone"
          />
        </div>
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800 "
            >Alternative Telephone/Mobile*</label
          >
          <input
            type="text"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="Alt Phone"
            v-model="clubData.phone"
          />
        </div>
        <!-- address -->
        <div class="flex flex-col col-span-2 justify-end">
          <label
            for="Address"
            class="uppercase font-bold text-lg text-gray-800  "
            >Address</label
          >
        </div>
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800 "
            >Street</label
          >
          <input
            type="text"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="4th street ......"
            v-model="clubData.street"
          />
        </div>
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800 "
            >state</label
          >
          <input
            type="text"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="India"
            v-model="clubData.state"
          />
        </div>
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800 "
            >city</label
          >
          <input
            type="text"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="Mumbai"
            v-model="clubData.city"
          />
        </div>
        <div class="flex flex-col justify-end">
          <label for="Address" class="uppercase text-sm text-gray-800 "
            >pin</label
          >
          <input
            type="number"
            class="bg-gray-300 rounded-sm py-1 px-3 focus:outline-none"
            placeholder="400011"
            v-model="clubData.pin"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-blue-600 py-2 cursor-pointer uppercase text-white text-center hover:shadow-inner rounded-sm hover:bg-blue-600"
      @click="registerClub"
    >
      Submit
    </div>
    <!--     
    <button
      class="bg-blue-500 w-full my-5 py-3 shadow-lg uppercase text-white rounded-sm tracking-wider hover:bg-blue-600"
      @click="registerClub"
    >
      Submit
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'club-registration-form',
  data: () => {
    return {
      clubData: {
        street: '',
        city: '',
        state: '',
        pin: '',
        country: '',
        phone: '',
        telePhone: '',
      },
    };
  },
  computed: {
    currentClubData: () => this.$store.getters.currentClubData,
  },
  methods: {
    registerClub() {
      this.$store.dispatch('updateClub', this.clubData);
    },
  },
};
</script>
