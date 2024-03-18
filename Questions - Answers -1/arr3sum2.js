// When base on first of three array index total sum = 9 , We had to show total sum equal - target - 9
let arr = [
  1, 1, 3, 3, 4, 0, 9, 9, 7, 2, 14, 2, 3, 4, 3, 1, 2, 6, 1, 2, 8, 7, 9,
];

let result = [];
target = 9;
for (let i = 0; i < arr.length - 2; i++) {
  if (arr[i] + arr[i + 1] + arr[i + 2] === target) {
    result.push([arr[i], arr[i + 1], arr[i + 2]]);
  }
}
console.log("The Total 9 result = ", result);
