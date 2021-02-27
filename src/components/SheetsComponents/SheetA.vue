<template>
  <div v-if="aparatus.length != 0">
    <div v-for="(elements, i) in Object.entries(aparatus[0])" :key="i">
      <!-- print object array -->
      <div v-for="(element, j) in elements[1]" :key="j">
        <div class="flex">
          <div class="w-1/3 bg-gray-400 flex mx-3">
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
          <div class="grid grid-cols-6 gap-10">
            <div
              v-for="(e, k) in fails"
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
</template>

<script>
export default {};
</script>

<style></style>
