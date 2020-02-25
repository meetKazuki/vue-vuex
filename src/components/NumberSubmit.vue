<template>
  <div>
    <input type="number" v-model="number">
    <button @click="addNumber(number)">Add Number</button>
  </div>
</template>

<script>
export default {
  name: 'NumberSubmit',
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber(number) {
      this.$store.dispatch('addNumber', Number(number));
    },
  },
};
</script>
