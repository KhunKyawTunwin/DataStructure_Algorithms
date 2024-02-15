// let array = [2,3,5];  //4


// let total = ((array.length + 1) * (array.length + 2)) / 2;  //51

// for(let i = 0; i < array.length; i++){
//     total = total - array[i];
//  }
// console.log("Missing Number :" ,total);

var arr = [3,4,5,6,8];
let result = 0;
outputArr = [];

let missing = (arr) => {
	for ( let i = 0; i < arr.length -1; i++){
		result = arr[i + 1] - arr[i];
		if (result !== 1){
			outputArr.push(arr[i + 1] -1);
		}
	}
	return outputArr;
};

console.log("Missing Number : " ,missing(arr));










