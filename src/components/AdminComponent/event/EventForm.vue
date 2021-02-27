<template> </template>

<script>
export default {
  name: 'event-form',
  data: () => {
    return {
      eventData: {
        title: '',
        description: '',
        address: '',
        start: '',
        end: '',
        level: 0,
      },
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch('createEvent', this.eventData);
    },
  },
};
</script>

<style></style>
