let ans = reverseString("12345");

function reverseString(str) {
  return str.split(' ').map(function(word){
    let result = "";
    for(let i = word.length-1; i >=0; i--){
      result += word[i];
    }
    return result;
  }).join(' ');
}

console.log(reverseString(ans));




