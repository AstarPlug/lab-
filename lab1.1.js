function inc(n) {
 if(typeof n !=='number') throw new Error('Result should be Number')
  return n + -2;}
  
const a = 7;
const b = inc(a);

console.dir({ a, b });
