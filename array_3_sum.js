let arr = [3,5,1,4,2,3];
target = 9;
function ThreeNumberSum(arr, target){
arr.sort = ((a ,b) => a- b );

const result = [];

let left;
let right;
for (let i = 0; i < arr.length -2; i++){
    left = i +1;
    right = arr.length -1;
    while(left < right){
        const Currentsum = arr[i] + arr[left] + arr[right];
        if (Currentsum === target) {
            result.push([arr[i], arr[left], arr[right]]);
            left++;
            right--;
        }
        else if(Currentsum < target){
            left++;
        }
        else if(Currentsum > target){
            right--;
        }
    }
}

return result;
}
console.log(ThreeNumberSum(arr, 9));

