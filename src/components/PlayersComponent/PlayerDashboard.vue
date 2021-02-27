<template>
  <div class="bg-gray-300 w-full h-screen">
    <div class="m-6">
      <div
        class="grid md:grid-cols-6 lg:grid-cols-6 grid-rows-6 grid-cols-3 gap-3"
      >
        <div class="col-span-3 bg-white rounded-sm">
          <div class="m-2">
            <!-- player detils -->
            <div class="uppercase text-sm font-bold">Players Detail</div>
            <!-- profile and details  -->
            <div class="flex my-5 mx-3">
              <div>
                <div class="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"
                    class="object-cover"
                  />
                </div>
              </div>
              <!-- details -->
              <div class="mx-5">
                <div class="flex items-center space-x-1">
                  <div><icon name="user" /></div>
                  <div class="font-medium">AmitKumar rai</div>
                </div>
                <div class="flex items-center space-x-1">
                  <div><icon name="club" /></div>
                  <div class="font-medium w-full">
                    Mahalaxmi stports club
                  </div>
                </div>

                <div class="flex items-center space-x-1">
                  <div><icon name="phone" /></div>
                  <div class="font-medium w-full">
                    9869338902
                  </div>
                </div>
                <!-- blotd -->
                <div class="flex justify-between items-center space-x-1">
                  <div class="flex items-center">
                    <div><icon name="blood" class="text-gray-800" /></div>
                    <div class="font-medium w-full">
                      A+
                    </div>
                  </div>
                  <div
                    class="bg-red-400 px-3 uppercase rounded-full font-bold text-white text-sm"
                  >
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3 bg-white rounded-sm">
          <div class="m-2">
            <!-- player detils -->
            <div class="uppercase text-sm font-bold">Club Details</div>
          </div>
        </div>

        <div class="col-span-6  row-span-2 bg-white rounded-sm ">
          <event-list />
        </div>
        <div class="bg-white col-span-3 row-span-3">
          <div>Participation History</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventList from './EventList.vue';
export default {
  components: { EventList },
  name: 'playersDashboard',
};
</script>

<style></style>
