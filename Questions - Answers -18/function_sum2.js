const input1 = [100101, 1000110, 1000101, 1000101];
const input2 = [666, 333, 444, 555];
const input3 = "01 243 23 23 2 3 ss 23";

function threeInputs(input){
    if(Array.isArray(input)){
        let total1 = 0;
        for (let i = 0; i < input.length; i++){
            total1 += input[i];
        }
        return total1;
    }else if(!Array.isArray(input)){
        let number = ["1" ,"2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let total = 0;
        let splitNumber = input.split("");
        for (let i = 0; i < splitNumber.length; i++){
            if(number.includes(splitNumber[i])){
                total += parseInt(splitNumber[i],10);

            }else if (!number.includes(splitNumber[i])){
                let variable = splitNumber[i];
                console.log(variable);
            }
        }
        return total;
    }
}

let result = threeInputs(input1);
let result1 = threeInputs(input2);
let result2 = threeInputs(input3);

console.log(result);
console.log(result1);
console.log(result2);

