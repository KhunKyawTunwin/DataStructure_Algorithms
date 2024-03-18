let arr = [
  [2, 4, 5],
  [6, 3, 1],
  [7, 4, 5],
];
function difference(arr, n) {
  let a1 = 0,
    a2 = 0;
  for (let i = 0; i < n; i++) {
    a1 += arr[i][i];
    a2 += arr[i][n - i - 1];
  }
  return Math.abs(a1 - a2);
}
console.log(difference(arr, 3));
