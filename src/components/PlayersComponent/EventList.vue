<template>
  <div class="py-5 px-5">
    <v-calendar title-position="left" v-model="d.date" />
  </div>
</template>

<script>
export default {
  name: 'player-event',
  data: () => {
    return {
      d: {
        date: new Date(),
      },
    };
  },
};
</script>

<style></style>
