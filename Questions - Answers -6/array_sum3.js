let array = [3,3,6,3,6,2,-8,17,7,2,3,6,3,4];
let temporaryarray = [];
let resultarray = [];
let target = 9;
let targetMinusArrayIndex = 0;

function twosum (array, target){

    for(let i = 0; i < array.length; i++){
        targetMinusArrayIndex = target - array[i];
        temporaryarray.push(array[i]);
        //console.log(temporaryarray);

        if (temporaryarray.includes(targetMinusArrayIndex)){
            resultarray.push([targetMinusArrayIndex, array[i]]);
            temporaryarray[i] = "empty";
        }
    }
    return resultarray;
}
console.log("Sum of two number 9 are ", twosum(array,9));