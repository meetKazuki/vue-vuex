<template>
  <NumbersChild
    :numbers="numbers"
    @number-added="numbers.push($event)"
  />
</template>

<script>
import NumbersChild from './NumbersChild.vue';

export default {
  name: 'NumbersParent',
  data() {
    return {
      numbers: [1, 2, 3],
    };
  },
  components: {
    NumbersChild,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
