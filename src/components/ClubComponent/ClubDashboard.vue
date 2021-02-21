<template>
  <div class="bg-gray-300 h-screen overflow-hidden w-full">
    <div
      class="flex items-center justify-center "
      v-show="!clubData.Address && !clubData.Address"
    >
      <club-registration-form />
    </div>
    <div v-show="clubData">
      <!-- club  -->
      <div class="bg-white w-full rounded-md flex  divide-x-2 mx-4 my-4 ">
        <div class="w-1/3 flex flex-col items-center py-4 mx-3">
          <div>
            <div class=" rounded-full ">
              <img
                src="https://static4.depositphotos.com/1009701/356/i/950/depositphotos_3567684-stock-photo-new-shopping-center.jpg"
                alt=""
                class="rounded-full w-28 h-28"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center space-y-2">
            <div class="font-bold text-gray-800 text-xl">
              Mahalaxmi Sports Club
            </div>
            <div class="flex space-x-2">
              <span class="flex flex-col items-center text-gray-800"
                ><div>15</div>
                <div class="text-xs uppercase font-bold">
                  Player Approve
                </div></span
              ><span class="flex flex-col items-center text-gray-800"
                ><div>2</div>
                <div class="text-xs uppercase font-bold">
                  Pending Players
                </div></span
              >
            </div>
          </div>
        </div>
        <div class="w-4/6">
          <div class="px-5 py-6">
            <div class="grid grid-rows-3 grid-cols-3 w-full gap-3 ">
              <div>
                <div class="font-bold text-gray-700">Admin Name</div>
                <div class="text-gray-800">{{ clubData.admin.name }}</div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Phone No</div>
                <div class="text-gray-800">{{ clubData.phone }}</div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Date Of Reg</div>
                <div class="text-gray-800">{{ clubData.createdAt }}</div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Street Address</div>
                <div class="text-gray-800 overflow-hidden">
                  {{ clubData.Address.street }}
                </div>
              </div>
              <div>
                <div class="font-bold text-gray-700">City</div>
                <div class="text-gray-800">{{ clubData.Address.city }}</div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Zip Code</div>
                <div class="text-gray-800">{{ clubData.Address.pin }}</div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Member Status</div>
                <div class="text-gray-800 flex items-center space-x-2">
                  <div>{{ clubData.approved ? 'Active' : 'Not Active' }}</div>
                </div>
              </div>
              <div>
                <div class="font-bold text-gray-700">Reg Date</div>
                <div class="text-gray-800">2-12-2020</div>
              </div>
              <div>
                <div class="font-bold text-gray-700"></div>
                <div class="text-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- club end -->
    </div>
    <div class="mx-4 bg-white rounded-sm">
      as
    </div>

    {{ clubData }}
  </div>
</template>
<script>
import ClubRegistrationForm from './ClubRegistrationForm.vue';
// import ClubBanner from './ClubBanner.vue';
export default {
  name: 'ClubDashboard',
  components: {
    ClubRegistrationForm,
    // ClubBanner,
  },
  data: () => {
    return {};
  },
  mounted() {
    this.$store.dispatch('myClubDate');
  },
  computed: {
    clubData: function() {
      return this.$store.getters.currentClubData;
    },
  },
};
</script>

<style></style>
