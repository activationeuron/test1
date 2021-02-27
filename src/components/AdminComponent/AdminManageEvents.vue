<template>
  <div class="bg-gray-300 h-full w-full divide-y-2 divide-gray-400">
    <div>
      <headers icon="event" heading="Events > Event Lists" />
    </div>
    <div class="px-6">
      <div>
        <!-- listiten -->
        <div class="grid grid-cols-7 text-gray-700   px-2 shadow-sm rounded-sm">
          <div class="flex items-center space-x-2">
            Event Name
          </div>
          <div class="flex items-center">Vanue</div>
          <div class="flex items-center">City</div>
          <div class="flex items-center">Event Date</div>
          <div class="flex items-center ">
            Players Count
          </div>
          <div class="flex items-center">Status</div>
        </div>
        <!-- data -->
        <div
          class="grid grid-cols-7 text-gray-700 mt-6 bg-white py-2 px-2 shadow-sm rounded-sm"
          v-for="event in allEvents"
          :key="event._id"
        >
          <div class="flex items-center space-x-2">
            <input type="checkbox" name="" id="" />
            <router-link
              :to="{ name: 'admin-event-sel', params: { id: event._id } }"
            >
              <div class="flex space-x-2">
                <div
                  class="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center uppercase text-white"
                >
                  S
                </div>

                <div class="flex flex-col justify-center">
                  <div class="text-sm font-bold">{{ event.title }}</div>
                  <div class="text-xs">Age group 12-18</div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="flex items-center">Andhari Sports Complex 12</div>
          <div class="flex items-center">Mumbai</div>
          <div class="flex items-center text-blue-500">12-12-2020</div>
          <div class="flex items-center justify-between">
            <div class="text-blue-500">140</div>
          </div>
          <div class="flex items-center ">
            <span class="bg-blue-500 text-white px-2 font-bold rounded-sm">
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import Icons from '../../utils/Icons.vue';
// import icons from '../icons';
// import TopMenuBar from './Admin_Top_Manage_event';
import Headers from './Headers.vue';
export default {
  components: { Headers, Icons },
  name: 'manage-event',
  mounted() {
    this.$store.dispatch('getEventsAdmin');
  },
  computed: {
    allEvents() {
      return this.$store.getters.allEventsAdmin;
    },
  },
};
</script>
