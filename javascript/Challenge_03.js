// Finde das grösste Element in einem Array

function findMaxElement(array) {
  return array.sort()[array.length - 1];
}

console.log(findMaxElement([3, 45, 6, 78, 2, 99, -99999, -89]));
