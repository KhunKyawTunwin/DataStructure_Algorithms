let array = [2,4,5,3,8,9,12,12,3,3,9,15,21,18];
function division (array, target) {
let result = [];
let index = [];
 for(let i = 0; i < array.length; i++){
        if(array[i] % target === 0 && !index.includes(array[i])){    
            result.push(array[i]);
            index.push(array[i]);
        }  
 }
 return result;
}
let ans = division(array, 3);  
console.log("The Answer is : " ,ans);


let array2 = [3,2,3,4,2,1,3,3,4,5,5,4,6,7];

function Devision2 (array2, targetNum){
    let result1 = [];
    let index1 = [];
    for (let i = 0; i < array2.length; i++){
        if(array2[i] % targetNum === 0 && !index1.includes(array2[i])){
            result1.push(array2[i]);
            index1.push(array2[i]);
        }
    }
    return result1;
}

let ans1 = Devision2 (array2, 3);
console.log("The answer is ", ans1);
































