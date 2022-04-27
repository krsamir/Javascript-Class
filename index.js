const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

const temp = arr.forEach((k) => k);
// console.log(temp);
// map, filter

// arr.map((value) => {
//   console.log(value);
// });

const arr2 = [{ name: "Samir" }, { name: "Adi" }, { name: "nitish" }];
const nameArr = arr2.map((value) => value.name.toUpperCase());

// console.log(nameArr);

const abc = arr.filter((v, i) => v % 2 === 1);
// const [first, second, third] = arr;
const first = arr[0];
const third = arr[2];
// console.log(abc);
// console.log(first, third);

// Object
const person = { vote: () => true, name: "samir", age: 5, job: false };
// const name = person.name;
// const { name, job, age } = person;
// console.log(person.vote());

const bigArray = [
  { name: "samir", age: 1 },
  { name: "adi", age: 2 },
  { name: "nitish", age: 3 },
  { name: "ishita", age: 4 },
];
// console.log(bigArray.map(({ name, age }) => name));
// bigArray.map(({ name, age }) => console.log(name + "'s age is " + age));
// tenplate literals --> `` & ${} for printing strings

// bigArray.map(({ name, age }) => console.log(`${name}'s age is ${age}`));

// I want name of person whose age is greater than 2
// object shorthand
const nameObj = bigArray.map(({ name, age }) => {
  return { name, age: age };
});

// console.log(nameObj);

const objectData = {};
objectData.title = "aaaaa";
objectData.salary = "bbb";
console.log(objectData);
objectData.salary = 5000;
console.log(objectData);
