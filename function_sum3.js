const input1 = [1001,10101,10101,1110];
const input2 = [222,333,444,666,1];
const input3 = "3 2 ab 5 6 s 2";

const SumArray = (array1) => {
    let total = 0;
    let strtotal = 0;
    if(array1.length == 0 || array1.length == null){
        return console.log("Try Again");
    }else if (!Array.isArray(array1)){
        array1 = array1.split(" ");
    }
    
    array1.reduce((sum, current) =>{
        if(Number(parseInt(current))){
            total += +current;
        }else{
            strtotal += current.length;
        }
    }, 0);
    console.log("Total is ", total);
    console.log("The String Total is ", strtotal);
};

SumArray(input1);
SumArray(input2);
SumArray(input3);

