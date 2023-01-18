//This is an assignment for my freeCodeCamp JavaScript Certificate

function palindrome(str) {
    str = str 
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
  
    let backwards = str.split('')
     backwards = backwards
      .reverse()
      .join('')
      .toString()
    if (backwards === str) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("almostomla"));
  console.log(Waiting:palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("five|\_/|four"));
  