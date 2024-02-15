let Emp1Service = [3,4,5,6,7,8,9];
let Emp2Service = [1,2,3,4,5,6,7];
let Emp1Count = 0;
let Emp2Count = 0;
let arrayLength;
let sum1 = 0;
let sum2 = 0;

const compareRating = (array1, array2) => {

    if( !Array.isArray(array1) || !Array.isArray(array2)){
        return console.log("Invalid input. Please Try Again!");
    }

    array1.length >= array2.length 
    ? (arrayLength = array1.length)
    : (arraylength = array2.length);

    for ( let i = 0; i < arrayLength; i++){
        sum1 += array1.length;
        sum2 += array2.length;

        {
            array1[i] > array2[i]
            ? Emp1Count++
            : array1[i] == array2[i]
            ? (Emp1Count += 0)
            : Emp1Count++;
        }
    }

    sum1 > sum2
    ? console.log('Employer 1 total rating is ${sum1} and Employer 2 total is ${sum2}, employer 1 better and ${Emp1Count} times service )
    : sum1 = sum2
    ? console.log('Service Rating are the same ${sum1})
    : console.log('Employer 2 total rating is ${sum2})
};

compareRating(Emp1Service, Emp2Service);








