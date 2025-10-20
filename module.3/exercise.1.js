// sum of array
// function sum(arr) {
//   let result = 0;
//   for (const item of arr) {
//     console.log(typeof item);
//     if (typeof item === "number") {
//       result += item;
//     }
//     if (typeof item === "string") {
//       const stringNumber = +item;
//       console.log(typeof stringNumber, stringNumber);
//     }
//   }
//   return result;
// }

// console.log(sum([1, 2, "1d"]));

// function sum(bucket) {
//   for (bucket) {

//   }

// }
// console.log(bucket)

// sum of array
// function sum(arr) {
//   let biggestNumnber = 0;

//   if (!arr.length) {
//     return null;
//   }
//   for (const item of arr) {
//     if (item < biggestNumnber && biggestNumnber != 0){
//       biggestNumnber=item
//     }

//     // a > b
//     // biggestNumber = a
//   }
//   return biggestNumnber;
// }

// console.log(sum([1, 2, "3", "4", "five", NaN,]));

// check if item is number or not
// convert the item to the number type
// check if it was successful
// if it wasnt dont add
// if it was, add
// :rocket:

// 🚀

// const dog ={
//   colour: "red",
//   age: 7,
//   hairLength: "long"
// }

// const dog1 ={
//   colour: "brown",
//   age: 11,
//   hairLength: "short"
// }

// function sum(arr){
//   let result = "";

//   for (const item of arr) {

//     result += item;
//   }

//   return `🚀${result}`

// }

// console.log(sum([1, 2, 3, 10, 4, 5, 6,]))

function highnum(arr, max) {
  let result = [];

  for (const item of arr) {
    if (item < max) {
      result.push(item);
    }
  }

  return result;
}

function lownum(arr, min) {
  let result = [];

  for (const item of arr) {
    if (item > min) {
      result.push(item);
    }
  }

  return result;
}

function isNum(arr) {
  let result = [];

  for (const item of arr) {
    if (typeof item == "number") 
      result.push(item);
  }

  return result;
}

console.log(isNum([1, 2, 3, "3", 4, 5, 6], 3));
