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

// console.log("A ", myArr);

let new1 = myArr.slice(1,4)
// console.log(new1);

let new2 = myArr.splice(1,2)
// console.log(new2);


let mi = ["Rohit", "Pandya", "Ishan"]
let rcb = ["Kohli", "Faf"]

// mi.push(rcb);
// console.log(mi);

// console.log(mi.concat(rcb));

let all = [...mi, ...rcb];
// console.log(all);  // Spread

let num = [1,2,3,[4,5],7,[6,7,[8,9,0]]]
// console.log(num.flat(Infinity));

console.log(Array.isArray("Priyaka"));
console.log(Array.from("psahoo"));
console.log(Array.from({name : "ps"}));  //Intresting..

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
