function arrSort(arr) {
 return arr.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
 });
}

console.log(arrSort([5, 3, 2, 1, 4])); // Output: [1, 2, 3, 4, 5]



