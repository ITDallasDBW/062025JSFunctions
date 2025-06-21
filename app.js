// //DRY - Don't Repeat Yourself

// //Function definition
// function welcomePersonToFES(name) {
//     console.log(`Welcome to FES, ${name}`)
// }

// //Call the function
// welcomePersonToFES('David')
// welcomePersonToFES('Zen')
// welcomePersonToFES('Mitri')

// function fn() {
//     return 5
//     console.log('my function')
// }

// console.log(fn());
// function sumOfTwoNumbers (num1, num2) {
//     return num1 + num2
// }
// console.log(sumOfTwoNumbers(10,10));

// function tempConvert(cel) {
//     return cel*1.8+32
// }


const tempConvert =(cel) => {
    return cel*1.8+32
}
console.log(tempConvert(0))
console.log(tempConvert(10))
console.log(tempConvert(30))