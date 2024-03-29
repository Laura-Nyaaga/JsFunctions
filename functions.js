//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order;
function Vehicles(array){
    const vehicles=["Toyota","Audi","Scania","Isuzu"]
    console.log(vehicles.reverse().sort());
    // console.log(vehicles.reverse());
} ;
 Vehicles();

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
//let numArr = [1,3,4,-5,-6,0];
function check(arr1){
    let numArr = arr1;
    for(let i= 0; i< arr1; i++){
        if (arr1[i] < 0) {
             console.log('Negative');
            return {return: 'Positive'};
        }else if(arr1[i]> 0) {
            console.log('Positive');
          return {return: 'Positive'};
        }else{
            console.log('Zero');
             return {return: 'Zero'};
         }
         };
    };
   console.log(check([1,3,4,-5,-6,0]));
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function employee(){
    let object = ['id', 'name', 'salary'];
    const newObject = [];
   newObject.push(object.reverse());
   console.log(newObject);
 };
 employee();
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiplication (num1) {
  let numbers = num1 ;
  num1. forEach((num) =>{
    console.log(num*2);
  });
}
multiplication([5,6,7,8]);
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values:
function arrnum (arr) { 
  let numbersArray = arr.slice(0,4).map(element=>element*8);
  let numberArray = arr.slice(-2,).map(element=>+5);
  let numbersarray = numbersArray.concat(numberArray);
  console.log(numbersarray);
}
arrnum([5,6,7,7,9,47,78]);
