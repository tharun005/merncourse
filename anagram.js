function anagram(str1,str2){
  let str1len=str1.length
  let str2len=str2.length
  if(str1len!=str2len){
    return false;
  }
  let splitstr1=str1.toLowerCase().split('').sort().join('')
  let splitstr2=str2.toLowerCase().split('').sort().join('')
   return splitstr1===splitstr2;
  
}
console.log(anagram('abc','bba'));