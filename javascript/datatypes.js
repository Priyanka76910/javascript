// Primitive -- (Call by Value)

// 7 Types : String, Number, Boolean , null, Undefined, symbol, BigInt

// reference -- (Non Primitive)

// Array, Objects, Functions

// Stack(Primitive) - Here we get copy , Heap (Non-Primitive) but here we get reference (Original Value)
let myName = "Priyanka";
let name = myName;
name1 = "Priyanka sahoo"

// Stack
console.log(myName);
console.log(name1);

let userOne = {
    email : "priyanka@gmail.com",
    upi : "priyanka@paytm"
}

let userTwo = userOne
//Heap
userTwo.email = "sahoo@gmail.com"
console.log(userOne.email);