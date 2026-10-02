const arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.toSorted();
}
/* 

Another forms for complete this quest
 
* arr.slice().sort();
* arr.toReversed
* [...arr],sort()
* arr.slice().sort();

 */

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (sin cambios)
