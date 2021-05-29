// Question 1
//  Create an Array from 0...100 without using traditional For-loop

let numberArray = Array.apply(null, { length: 100 }).map(function (_, i) {
    return i + 1;
});

console.log(numberArray);

//question 2
//Question 2: Create an Array of only even numbers from the above array
let newArray = [];
let evenArray = numberArray.map(function(val,key){
    if(val % 2 == 0 ){
        newArray.push(val);
    }  
})
console.log(newArray);

// 
//Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed

function squarNumber(num) {
    return new Promise(async (resolve, reject) => {
      if(num % 2 == 0){
          resolve(num*num);
      }else{
          reject('Error, you have passed odd number')
      }

    });
  }

  
  console.log(squarNumber(4));
  console.log(squarNumber(3));

  // Question 3: create an array of even squares using the previous array
   let evenSquarArray = [];
  let eArray = newArray.map(function(val,key){
        evenSquarArray.push((val*val));  
})

console.log(evenSquarArray);


/// Question 4: Sum of all the squares from the above array of Even Squares

let sumArray = evenSquarArray.reduce((a, b) => a + b, 0);

console.log(sumArray);

// Ans 5:
/*1. Number of errors - 50
2. The resultant array- array containing squares of all even numbers from 0-100
3. Number of objects in the resultant array- 51
  */

 // Q1: Create a template string of a button HTML Element. Save the title
 // for the button in a separate var and use it in the button correctly.
    var buttonTitle = "Address";
    var butt = `<button  title=${buttonTitle}>${buttonTitle}</button>`;
 
 // Q2: Create a function that returns a list element (<li>) HTML 
 // use this function to create an ordered list HTML structure of numbers from 
 // 1-30 without breaking the template string invocation i.e. usage of += is disallowed.
 
 function makeLi(array) {
    var ol = document.createElement("ol");
      for (var i = 1; i <= 30; i++) {
       var li = document.createElement ("li");
        ol.appendChild (li);
      }
      return ol;
  }


 // Q3: Now only print the even numbers. Again, breaking the template string
 // invocation is disallowed


 
 // Q4: Create a promise that simulates a delay of 1-3s randomly. Create an array of 
 // 10 such promises. Only print the output when all promises have been resolved.
 
 const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3, 'one');
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1, 'two');
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2, 'three');
  });
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3, 'four');
  });
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2, 'five');
  });
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1, 'six');
  });
  const promise7 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1, 'seven');
  });
  
  const promise8 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2, 'eight');
  });
  const promise9 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3, 'nine');
  });
  
  const promise10 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2, 'ten');
  });
  
  let arr= [promise1, promise2,promise3,promise4,promise5,promise6,promise7, promise8, promise9, promise10]
  
  Promise.allSettled(arr).then((values) => {
    console.log(values);
  });