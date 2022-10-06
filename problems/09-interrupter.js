/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// Your code here
const interrupter = (word) => {
  let intWord = word;
  console.log(intWord)
  function int(sentence){
let finalArr = []
 let newArray = sentence.split(" ")
    for(let i = 0; i < newArray.length; i++){
      if (i % 2 ===0 && i !== newArray.length-1){
        finalArr.push(newArray[i])
      }else{
        finalArr.push(intWord)
        finalArr.push(newArray[i])
      }
    }
    return finalArr.join(' ')

  }

  return int
}
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you, testing this out to see what happens")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
