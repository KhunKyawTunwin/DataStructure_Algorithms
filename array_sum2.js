let arr = [3,3,4,5,6,7,,4,3,4];
num = 9;
let outputArr = [];
let secondArr = [];
let Tempobj = {};
let ind = 0;

const findNum = (arr, num) => {
    arr.map((data) => {
        if(secondArr.includes(num - data)){
            outputArr.push({[Tempobj[data]]: data });
            ind = secondArr.indexOf(num - data);
            secondArr[ind] = "ad";
        }else{
            Tempobj[num - data] = data;
            secondArr.push(data);
            //console.log("tempobj is ", Tempobj);
            //console.log("Secondary arrat first push is ", secondArr);
        }
    });
    return outputArr;
};
console.log(findNum(arr, 9));

