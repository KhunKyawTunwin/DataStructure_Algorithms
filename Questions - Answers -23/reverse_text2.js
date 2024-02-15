// let text = "Hello World";
// function wordsReverse(string){
//     return string.split(' ').map(function(word){
//         let result = " ";
//         for (let i = word.length -1; i >= 0; i--){
//             result += word[i];
//         }
//         return result;
//     }).join(' ');
// }
// console.log(wordsReverse(text));

let text = "Hello World";
let result = "";
for(let i = text.length-1 ; i >= 0 ; i --){
  result += text[i];
}
console.log(result);

