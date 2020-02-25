export const storeS = {
  state: {
    numbers: [1, 2, 3],
  },

  addNumber(number) {
    this.state.numbers.push(number);
  },
};
