// Print 1 to 5 (FOR Loop)

// let print = "Priyanka";
// for(let i=0; i<5; i++){
//     console.log(print);
// }

// WHILE Loop
// let i=1;
// while (i<5) {
// console.log("i" , i);
// i++;
// }

// Sum of 5 digit

// let sum =0;
// for(let i=1; i<=6; i++){
    
//     sum = sum+i;
// }
// console.log(sum);


// FOR-of-LOOP -- Use for Array & String..

//Length n Size
let size = 0;

let str = "PriyankA";
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

// FOR-in-Loop  -- Use for Objects/ Arrays
let student = {
    name : "Priyanka",
    age : 20,
    isPass : true
};
for(let key in student){
   console.log(student[key]); 
}

// Template Literals 
// String Interpolation -  A way to have embedded expressions in Strings
let sentence = `This is a template literal ${1+3}`;
console.log(sentence);

//Escape Characters we use to give next line (\n) and it's length never count as 2 although it's 2 character it's calculating as 1 character.
// String Methods
let a = "jkMNl  l   ";
console.log(a.toLowerCase(), a.toUpperCase(),a.trim() );
