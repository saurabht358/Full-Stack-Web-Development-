/*
console.log( 4 < 6)
console.log( 4 > 6)
console.log( 4 == 5)
console.log( 4 != 5)

console.log()

console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);

console.log()

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);
*/

//   === check first datatypes and then compare (it does not convert datatype explicitely like == )

// console.log( null === 0)
// // console.log( 0.0 === 0)
// console.log( "2" == 2)
// console.log( "2" === 2)

// datatypes 

// primitives : number , String , boolean , null, undefined, BigInteger, 


// reference datatypes : array, object, method

// array
let nums = [1,4,5,4]
console.log(typeof nums);
console.log(typeof nums[0]);
console.log(nums[3]);

// objects 

let map = {
    6:"Saurabh",
    2:"Shubham"
}

// console.log(map[1])  // if key is not present it returns undefined
console.log(map[6])

// method/function

let sum = function(){
    let a = 34;
    let b = 23;
    console.log(a+b)
}

// sum()
