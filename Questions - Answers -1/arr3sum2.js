let arr = [4, 2, 3, 4, 3, 1, 2, 6, 1, 2, 8, 7, 9];
let result = [];
target = 9;
for (let i = 0; i < arr.length - 2; i++) {
  if (arr[i] + arr[i + 1] + arr[i + 2] === target) {
    result.push([arr[i], arr[i + 1], arr[i + 2]]);
  }
}
console.log("The Total 9 result = ", result);
