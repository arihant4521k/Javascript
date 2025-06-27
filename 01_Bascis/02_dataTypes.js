"use strict"; // treat all JS code as newer version good practice

// alert("hello") // we are using node JS not browser (alert is used to generate a pop up message )

console.log(3
    +
    3 ) // code readability should be high ,not a good practice

// https://tc39.es/ecma262/  //standards for engine developers ..

// other we can use mdn docs 

let Name = "ari"
let age = 18
let isLoggedIn = true

// primitive data types 
// numnber => range is 2 power 53
// bigint => for larger numbers
// string => ""
// boolean => true/false
// null => standalone value  (its type is - object)
// undefined => whose value is not specified
// symbol => used to identify components uniquely

// (non primitive)
// object

console.log(typeof "ari")
console.log(typeof age)
console.log(typeof undefined)    // is undefined
console.log(typeof(null))        // output is object -(a draw back of js even though null 
                                 // is not an object ..becuase in earlier versions of 
                                 // js the type tag of both null and object were given as 0)