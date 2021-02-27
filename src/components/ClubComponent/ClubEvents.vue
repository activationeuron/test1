<template>
  <div class="bg-gray-300  min-h-full">
    <div class="mx-8 py-8">
      <div class="flex justify-between">
        <div>Event Name</div>
        <div>Event Level</div>
      </div>
      <div
        v-for="event in currentEvents"
        :key="event._id"
        class="flex bg-white py-2 justify-between px-5"
      >
        <div>{{ event.title }}</div>
        <div>
          {{ event.eventLevel }}
        </div>
        <router-link :to="{ name: 'club-event', params: { id: event._id } }">
          <div class="text-blue-500">More...</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clubEvents',
  methods: {
    getEvents() {
      this.$store.dispatch('getAllEvents');
    },
  },
  mounted() {
    this.getEvents();
  },
  computed: {
    currentEvents: function() {
      return this.$store.getters.currentEvents;
    },
  },
};
</script>

<style></style>
