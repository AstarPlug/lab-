const countTypes = (list) => {

  const counters = {};

  for (const item of list) {
    const type = typeof item;

    if (!counters[type]) {
      counters[type] = 0;
    }

    counters[type] = counters[type] + 1;
  }

  return counters;
};

module.exports = { countTypes };

const testArray = [true, 'hello', false, "farm", 5, false, 'word', 10, "80", true, 'JavaScript', 20, 90,];

const result = countTypes(testArray);

console.log(testArray);
console.log(result);