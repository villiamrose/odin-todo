const arr = ['a', 'b', 'c'];

const idx0 = arr.findIndex(i => i === 'a');
const idx1 = arr.findIndex(i => i === 'b');
const idx2 = arr.findIndex(i => i === 'd');

console.log(idx0);
console.log(idx1);
console.log(idx2);

const newArr = arr.splice(idx1, 1);

console.log(newArr);
console.log(arr);