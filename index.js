const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

const temp = arr.forEach((k) => k);
// map, filter

// arr.map((value) => {
//   console.log(value);
// });

const arr2 = [{ name: "Samir" }, { name: "Adi" }, { name: "nitish" }];
const nameArr = arr2.map((value) => value.name.toUpperCase());

console.log(nameArr);

const abc = arr.filter((v, i) => v % 2 === 1);
// const [first, second, third] = arr;
const first = arr[0];
const third = arr[2];
console.log(abc);
console.log(first, third);
