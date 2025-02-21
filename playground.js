const arr = [1, -1, 2, 3];

const sum = arr.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0)

console.log(sum); 