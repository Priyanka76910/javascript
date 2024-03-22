let myArr = [1,2,3,4,5]

let hero = new Array(1,2,3,4,5)
// console.log(myArr[3]);

// methods

// myArr.push(8)
// myArr.pop()

// myArr.unshift(89) // Add element on 1st
// myArr.shift()

let newArr = myArr.join() // It will convert to String..

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//Slice , splice

console.log("A ", myArr);

let new1 = myArr.slice(1,4)
console.log(new1);

let new2 = myArr.splice(1,2)
console.log(new2);