<template>
  <div class="bg-gray-300 h-screen overflow-hidden w-full">
    <div class="flex items-center justify-center" v-show="!clubData.address">
      <club-registration-form />
    </div>
    <div class="mx-2 my-2">
      <div class="flex justify-between space-x-2">
        <div class=" w-1/2 bg-white">
          {{ clubData.clubName }}
        </div>
        <div class="w-1/2 bg-white">as</div>
        <!-- club end -->
      </div>
    </div>
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
      return this.$store.getters.currentData;
    },
  },
};
</script>

<style></style>
