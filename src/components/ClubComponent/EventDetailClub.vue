<template>
  <div class="bg-gray-300 h-full">
    <div>
      {{ eventId }}

      <div>club Players</div>
    </div>
    <div
      v-for="players in clubPlayers"
      :key="players._id"
      @click="addToEvent(players._id)"
    >
      <div class="bg-white py-2 mx-2 w-1/2 px-5">
        {{ players.firstName }}
      </div>
    </div>
    <!--  -->

    <div>
      <button
        @click="registerForEvent"
        class="bg-blue-400 my-10 py-2 rounded-sm px-3"
      >
        Register Player for this event
      </button>
    </div>
    {{ players }}
  </div>
</template>
<script>
export default {
  name: 'EventDetailClub',
  data: function() {
    return {
      players: [],
    };
  },
  methods: {
    allClubPlayers() {
      this.$store.dispatch('clubPlayers', this.eventId.id);
    },
    addToEvent(playerId) {
      if (!this.players.includes(playerId)) {
        this.players.push(playerId);
      }
    },
    registerForEvent() {
      this.$store.dispatch('registerForEvent', {
        eventId: this.eventId,
        players: this.players,
      });
    },
  },
  mounted() {
    this.allClubPlayers();
  },
  computed: {
    eventId: function() {
      return this.$route.params;
    },
    clubPlayers: function() {
      return this.$store.getters.clubPlayers;
    },
  },
};
</script>

<style></style>
