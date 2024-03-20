// Print 1 to 5 (FOR Loop)

let print = "Priyanka";
for(let i=0; i<5; i++){
    // console.log(print);
}

// WHILE Loop
let i=1;
while (i<5) {
// console.log("i" , i);
i++;
}

// Sum of 5 digit

let sum =0;
for(let i=1; i<=6; i++){
    
    sum = sum+i;
}
// console.log(sum);


// FOR-of-LOOP -- Use for Array & String..

//Length n Size
let size = 0;

let str = "PriyankA";
for(let i of str){
    // console.log(i);
    size++;
}
// console.log(size);

// FOR-in-Loop  -- Use for Objects/ Arrays
let student = {
    name : "Priyanka",
    age : 20,
    isPass : true
};
for(let key in student){
//    console.log(student[key]); 
}

//Escape Characters we use to give next line (\n) and it's length never count as 2 although it's 2 character it's calculating as 1 character.
// String Methods
let a = "jkMNl  l   ";
// console.log(a.toLowerCase(), a.toUpperCase(),a.trim() );


/*console.log(typeof null); // Output will be Object
console.log(typeof undefined); //Output will be Undefined */

// How to change String value to Number

let score = "33" // If we type here Null then output will be 0 and NaN for undefined and string
// console.log(typeof score);
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let isLogIn =1;
let booleanIsLogIN = Boolean(isLogIn)
// console.log(booleanIsLogIN);

//   1 => true; 0 => false
//   "" - false
//   "abc" - false

//  ************************* Operations *********************
let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2 ** 3); // We will get power value here 

let str1 = "Hello"
let str2 = "  Priyanka"

let str3 = str2+str1 // Check with str1+ str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+2+2);
console.log(1+2+"2");

// === Strict check
console.log("2" == 2); //Bcz here it didn't check properly
console.log("2" === 2);