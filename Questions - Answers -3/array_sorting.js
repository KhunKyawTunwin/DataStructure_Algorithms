let arr = [5,4,3,2,5,8,9,1,9,3,8,5,3,7];
let temp = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
        temp = arr[i];  //5
        arr[i] = arr[i+1];  // 4
        arr[i+1] = temp;  
        i = -1;
    }
}

console.log("The sorting arrat is ", arr);
