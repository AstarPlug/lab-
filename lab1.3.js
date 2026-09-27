
const values = [true, 'hello', false, "farm", 5, false, 'word', 10, "80", true, 'JavaScript', 20, 90,];

const collection = {};

for (const value of values) {
  const type = typeof value;

  if (!collection[type]) {
    collection[type] = 0;
  }

  collection[type]++;
}

console.log(collection)