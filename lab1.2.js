function incObject(num) {
  num.n += 2;
}

const obj = { n: 5 };

incObject(obj);

console.dir(obj);