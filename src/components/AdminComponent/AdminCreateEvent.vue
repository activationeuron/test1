<template>
  <div class="bg-gray-300 h-screen w-full ">
    <div class="flex mx-6 space-x-2 w-1/2 md:w-full  ">
      <div class="w-1/2 my-10">
        <div class="px-4 py-3 bg-white  mx-2 md:mx-0 shadow rounded-sm ">
          <div class="max-w-md mx-auto  ">
            <div class="flex items-center space-x-5">
              <div
                class="block pl-2 font-semibold text-xl self-start text-gray-700"
              >
                <h2 class="leading-relaxed">Create an Event</h2>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-4 text-base leading-2 space-y-2 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="flex flex-col">
                  <label class="leading-loose">Event Title</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                    placeholder="Event title"
                    v-model="eventData.title"
                  />
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose">Vanue Address </label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                    placeholder="Address for the Event "
                    v-model="eventData.address"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Event Description</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                    placeholder="Optional"
                    v-model="eventData.description"
                  />
                </div>
                <div class="flex flex-col">
                  <div>
                    <div>
                      Sheet Level:
                    </div>
                    <select
                      v-model="eventData.eventLevel"
                      class="border py-2 w-full"
                    >
                      <option disabled value="">Please select one</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Event Date</label>
                  <input
                    type="date"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-sm focus:outline-none text-gray-600"
                    placeholder="Date"
                    v-model="eventData.eventDate"
                  />
                </div>
              </div>

              <div class="pt-4 flex items-center space-x-4">
                <button
                  class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  @click="createEvent"
                  class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-sm focus:outline-none"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-sm w-1/2 my-10">
        <div class="py-3 px-6">
          <div class="text-gray-700 font-bold text-xl">
            Event Score Sheet
          </div>
          <div class="flex justify-between items-start">
            <div>Name</div>
            <div>Level</div>
            <div>Age Limit</div>
          </div>
          <template v-for="sheet in levelSheets">
            <div
              :key="sheet._id"
              class="flex justify-between  my-2 px-2 rounded-sm"
              @click="addSheet(sheet._id)"
              :class="[
                eventData.eventSheets.includes(sheet._id)
                  ? 'bg-green-300 text-white'
                  : 'bg-gray-300',
              ]"
            >
              <div class="py-2 font-bold">{{ sheet.sheetName }}</div>
              <div class="py-2 font-bold">{{ sheet.sheetLevel }}</div>
              <div class="py-2 font-bold">
                {{ sheet.ageLimit }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- forms  -->

  <!-- form ends  -->
</template>

<script>
// import Headers from './Headers.vue';
// import EventForm from './event/EventForm.vue';
import icons from '../icons';
// import EventSheet from './event/EventSheet.vue';
export default {
  name: 'create-event',
  components: {
    // EventForm,
    // Headers,
    // EventSheet,
  },
  data: () => {
    return {
      eventData: {
        title: '',
        description: '',
        address: '',
        start: '',
        end: '',
        eventLevel: 0,
        eventDate: '',
        eventSheets: [],
      },
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch('createEvent', this.eventData);
    },
    getSheetByLevel() {
      this.$store.dispatch('sheetByLevel', this.eventData.eventLevel);
    },
    addSheet(sheetId) {
      console.log(this.eventData.eventSheets.includes(sheetId));

      if (!this.eventData.eventSheets.includes(sheetId)) {
        this.eventData.eventSheets.push(sheetId);
      } else {
        this.eventData.eventSheets.splice(
          this.eventData.eventSheets.indexOf(sheetId),
          1
        );
      }
      console.log(this.eventData.eventSheets);
    },
  },
  computed: {
    path() {
      return icons;
    },
    levelSheets() {
      return this.$store.getters.levelSheet;
    },
  },
  watch: {
    'eventData.eventLevel': function() {
      this.getSheetByLevel();
    },
  },
};
</script>

<style></style>
