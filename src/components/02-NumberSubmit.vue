<template>
  <div>
    <input v-model="number" type="number"/>
    <button @click="addNumber">Add new number</button>
  </div>
</template>

<script>
import { EventBus } from '@/helpers/eventBus';

export default {
  name: 'NumberSubmit',
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addNumber(number) {
      EventBus.$emit('number-added', Number(this.number));
    },
  },
};
</script>
