let array = [3,3,6,3,6,2,-8,17,7,3,6];
target = 9;

function twoSum (array, target) {
let result = [];
let index = []; //

 for(let i = 0; i < array.length; i++){

    for(let x = i +1; x < array.length; x++){

        if(array[i] + array[x] === target && !index.includes(i) && !index.includes(x)){    
            result.push([array[i], array[x]]);
            index.push(i);
            index.push(x);  
            
        }  
    }
 }
 return result;
}
let ans = twoSum(array,9);
console.log(ans);


























