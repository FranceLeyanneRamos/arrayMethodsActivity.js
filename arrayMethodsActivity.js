//Concatenate two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const concatenatedArr = arr1.concat(arr2);
console.log(concatenatedArr); 

//Add an element to the end of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); 

//Add elements to the beginning of an array
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); 

//Remove the last element from an array
const removedLastFruit = fruits.pop();
console.log(removedLastFruit); 
console.log(fruits); 

//Remove the first element from an array
const removedFirstElement = array1.shift();
console.log(removedFirstElement); 
console.log(array1); 

//Sort an array alphabetically
fruits.sort();
console.log(fruits);

//Create a new array containing a portion of another array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); 

//Insert and remove elements in an array
const months = ["January", "February", "March", "April"];
months.splice(1, 1, "February Updated"); 
console.log(months); 