console.log(`hello`);
let one ="hii"
let two=",how are you"
console.log(`${one} ${two}`);//concatinating two strings using the backticks
let sentance="i am all good how are you "
console.log(sentance.length);// getting the length of th string 
console.log(sentance.indexOf("all"));// getting the index of the string " all "
console.log(sentance.indexOf("p"));//getting the index of the string "p " 
//which is not in the main string so we are getting -1 as output
//********* SLICE******
//   getting a substring from the main string as a slice
let str ="pigibank"
console.log(str.slice(2,4));
// console.log(str.slice(4)); 

// changing case
console.log(str.toLowerCase());//convert to lower case
console.log(str.toUpperCase());//convert to uppeer case


// update by using replace func 
let newstr=str.replace("pigi","new")
console.log(newstr);
// to change all ocurrance if all the string use "replaceall()"
let newsentence=sentance.replaceAll("all","not")
console.log(newsentence);
// replaced all occurance of that string 
//  
