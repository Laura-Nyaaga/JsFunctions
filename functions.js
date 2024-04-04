// //Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order;
function allElements(){
   AllElements=["Toyota", "Lorry", "Girl","laura"];
   newElements = [];
  AllElements.forEach(element => {
    if (element[0]=="l" || element[0]=="L") {
      let oldElements = element.split("").sort().reverse().join("");
      newElements.push(oldElements);
     }
      else{
        let oldElements = element.split("").sort().join("");
        newElements.push(oldElements);
      };
      
    });
    console.log(newElements);
};
 
allElements()

// //Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function check(){
  let arrnum = [5,0,7,-7,9,-47,78];
   arrnum.map(x =>{
      if (x < 0) {
        console.log('Negative');
            return {return: 'Negative'};

        }
        else if(x > 0) {
    console.log('Positive');
         return {return: 'Positive'};
       }
        else{
        //  console.log('Zero');
             return {return: 'Zero'};
         }
         })
    }
     check()
console.log(check());
// // // Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function employee(){
   let object = [{"id": 23, "name": "Laura", "salary": 7890}, {"id": 43, "name": "Austine", "salary": 20000}, {"id": 777, "name": "Nyaaga", "salary": 4000}];
   let newObject = object.sort((a,b) => a.salary - b.salary);
  console.log(newObject);
};
employee();
// // // Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiplication (num1) {
let numbers = num1.map(num => num*2);
console.log(numbers);
};
  multiplication([5,6,7,8]);
//Write a function that takes in an
// //array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values:
let arr = [4,6,7,8,9,3,715,20];
function arrnum () { 
   let numbersArray = arr.slice(0,4).map(element=>element*8);
   let numberArray = arr.slice(-2,).map(element=>element+=5);
  let numbersarray = numbersArray.concat(numberArray);
 console.log(numbersarray);
//  return numberArray;
 };
  arrnum();
//  console.log(arrnum());
  
  

