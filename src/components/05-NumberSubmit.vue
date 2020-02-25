<template>
  <div>
    <input type="number" v-model="numberInput" />
    <button @click="addNumber(numberInput)">Add new number</button>
  </div>
</template>

<script>
import { store } from '@/store/simpleStore';

export default {
  name: 'NumberSubmit',
  data() {
    return {
      numberInput: 0,
    };
  },
  methods: {
    addNumber(number) {
      store.addNumber(Number(number));
    },
  },
};
</script>
