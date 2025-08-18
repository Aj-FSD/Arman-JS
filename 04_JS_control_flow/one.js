// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 41 ){                          // === means strict checking means it checks also if both the value is in number,string or of other type.
//     console.log("less than 50");                    // === makes sure that both the value should be in same type exp = if its on left then it alse be a number on left 
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {                    
//     let power = "fly"                        
//     console.log(`User power: ${power}`);
// }                                                     

// console.log(`User power: ${power}`);          


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("greater than 900");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {             // here you can use more than one time && condition
    console.log("Allow to buy course");              // && (AND OPERATOR) means both value should be true
}

if (loggedInFromGoogle || loggedInFromEmail) {       // || (OR OPERATOR)means any one value should be true 
    console.log("User logged in");
}