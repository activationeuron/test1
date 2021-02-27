<template>
  <div
    class="px-6 py-6 divide-y-2 divide-gray-400 bg-gray-300 h-screen overflow-hidden"
  >
    <!-- <div>
      <div class="text-2xl text-gray-700">
        {{ eventdetails[0].eventSheets[0].sheetName }}
      </div>
      <div class="text-sm text-blue-500 font-bold">Age Group 8-11</div>
    </div>
    <div class="flex space-x-4 max-h-full">
      <div class="w-1/6 my-2 overflow-y-scroll">
        <div
          v-for="player in eventdetails[0].eventStudent[0].players"
          :key="player.id"
          @click="selectPlayer(player)"
          class="  mt-2 bg-white py-2 px-2 shadow-sm rounded-sm cursor-pointer "
          :class="[
            selectedPlayer != null
              ? selectedPlayer.id == player.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-500'
              : '',
          ]"
        >
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 rounded-full bg-gray-600">
              <img src="" alt="" />
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm font-bold">
                {{ player.firstName }}
              </div>
              <div class="text-xs">Age</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white my-4 mb-9 h-screen w-full rounded-md  ">
        <div class="px-6 py-6">
          <template v-if="selectedPlayer">
            <player-card
              :eventId="selectedPlayer.id"
              :name="selectedPlayer.name"
              :sheetId="selectedPlayer.sheetId"
              :clubName="selectedPlayer.clubName"
            />
          </template>
        </div>
      </div>
      {{ eventdetails }}

    </div> -->

    {{ eventdetails[0].eventStudent }}

    <div class="w-1/6 my-2 overflow-y-scroll">
      <div
        v-for="player in eventdetails[0].eventStudent"
        :key="player.id"
        @click="selectPlayer(player)"
        class="  mt-2 bg-white py-2 px-2 shadow-sm rounded-sm cursor-pointer "
        :class="[
          selectedPlayer != null
            ? selectedPlayer.id == player.id
              ? 'bg-blue-500 text-white'
              : 'text-gray-500'
            : '',
        ]"
      >
        <div class="flex items-center space-x-2">
          <div class="h-8 w-8 rounded-full bg-gray-600">
            <img src="" alt="" />
          </div>
          <div class="flex flex-col justify-center">
            <div class="text-sm font-bold">
              {{ player.firstName }}
            </div>
            <div class="text-xs">Age</div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="event in eventdetails" :key="event._id" class="flex flex-col">
      <div v-for="sheet in event.eventSheets" :key="sheet._id">
        <div
          v-for="(elements, i) in Object.entries(sheet.apparatus)"
          :key="i"
          class="mb-1"
        >
          <!-- print object array -->
          <!-- fails -->
          <div class="flex">
            <div class="mx-3 w-1/4"></div>
            <div
              v-for="(fail, x) in sheet.fails"
              :key="x"
              class="w-10 overflow-x-hidden"
            >
              {{ fail.key }}
            </div>
          </div>
          <div v-for="(element, j) in elements[1]" :key="j">
            <div class="flex">
              <div class="w-1/4 bg-gray-400 flex mx-3">
                <span class="flex flex-1">
                  {{ element.key }}
                </span>
                <span
                  class="w-10 cursor-pointer"
                  @click="addToD(element.value, i, j)"
                  :class="[
                    dindex.includes(parseInt(''.concat(i, j)))
                      ? 'bg-green-300'
                      : 'bg-gray-500',
                  ]"
                >
                  {{ element.value / 10 }}
                </span>
              </div>
              <!-- error prints  -->
              <div class="grid grid-cols-12">
                <div
                  v-for="(e, k) in sheet.fails"
                  :key="k"
                  @click="calcE(e.value, i, j, k)"
                  class="w-10 text-center cursor-pointer"
                  :class="[
                    k % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300',
                    eindex.includes(parseInt(''.concat(i, j, k)))
                      ? 'bg-red-300'
                      : 'bg-gray-500',
                  ]"
                >
                  {{ e.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PlayerCard from '../event/PlayerCard.vue';
export default {
  // components: { PlayerCard },
  name: 'live-event',
  component: {
    Headers,
    // PlayerCard,
  },
  data() {
    return {
      selectedPlayer: null,
      dindex: [],
      eindex: [],
      element: [],
      counter: 0,
      score: {
        dscore: 0,
        escore: 0,
        total: 0,
      },
    };
  },
  methods: {
    selectPlayer(id) {
      this.selectedPlayer = id;
    },
    addToD: function(dscore, i, j) {
      let unique = parseInt(''.concat(i, j));
      if (!this.dindex.includes(unique)) {
        let score = this.score.escore - dscore;
        this.score.escore = score;

        this.dindex.push(unique);
      } else {
        console.log(this.score.escore - dscore);
        let score = this.score.escore + dscore;
        this.score.escore = score;

        this.dindex.splice(this.dindex.indexOf(unique), 1);
      }
    },
    calcE: function(escr, i, j, k) {
      let unique = parseInt(''.concat(i, j, k));
      if (!this.eindex.includes(unique)) {
        let score = this.score.escore - escr;
        this.score.escore = score;
        this.eindex.push(unique);
      } else {
        console.log(this.score.escore - escr);
        let score = this.score.escore + escr;
        this.score.escore = score;

        this.eindex.splice(this.eindex.indexOf(unique), 1);
      }
    },
  },
  mounted() {
    this.$store.dispatch('getEventDetailAdmin', this.eventId);
  },
  computed: {
    eventId() {
      return this.$route.params;
    },
    eventdetails() {
      return this.$store.getters.eventDetailsAdmin;
    },
  },
};
</script>

<style></style>
