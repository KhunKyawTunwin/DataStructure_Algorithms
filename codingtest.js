let array = [3, 6,3, 1, 9, 7, 5],
    target = 9


    let TwoSum = (array, target) => {
                let sample = [];
                let result = [];
                
                for(let i = 0; i < array.length; i++){
                  let num = target - array[i];
                    
                    if (num in sample && !sample.includes(i)){
                        result.push([num, array[i]]);
                    }
                       sample[array[i]] = i;

                }
            return result;
            }

     let ans = TwoSum(array, target);
        console.log(ans);








    // const twoSum = (array, goal) => {
    //     let mapOfNumbers = {};
    //         let twoIndexes = [];
    
    //         for (let i = 0; i < array.length; i++) {
    //         mapOfNumbers[array[i]] = i;
    //     }
    
    //     for (let i = 0; i < array.length; i++) {
    //           let target = goal - arr[i];
    //       if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
    //         twoIndexes.push(i);
    //             twoIndexes.push(mapOfNumbers[target]);
    //       }
    //         }
    
    //       return twoIndexes;
    // }

//     


// let TwoSum = (array, sum) => {
//   let result = []

//   for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//       if (array[j] === sum - array[i]){
//         result.push([array[i], array[j]])
//       }
//     }
//   }
//   return result
// }

// let ans = TwoSum(arr, target);
// console.log(ans);
