dictionary = ('art', 'vascular', 'avast', 'javas', 'vat');
stringSequence = 'javascript';

function longestWord(array) {
  for (var element of array) {
    if (array.length > element.length) {
      element = array;
    }
    array = element;
  }
  return array;
};

function mapString(string) {
  let map = {

  };
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [
        i,
    
      ];
    }
  }
  return map;
};

function compareLetters(word, object) {
  for (var element of word) {
    if (object[element]) {
  
    } else {
      return false;
    }
  }
  return true;
};

function findNextIndex(array, minIndex) {
  for (var element of array) {
    if (element >= minIndex) {
      return element + 1;
    }
  }
  return false;
};

let mappedString = mapString(stringSequence);
function isSubsequence(word, map) {
  let minIndex = 0;
  for (let letter of word) {
    if (map[letter]) {
      minIndex = findNextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

function longestMatch(string, dictionary) {
  let match = [];
  let map = mapString(string);
  for (var element of dictionary) {
    if (isSubsequence(element, map)) {
      match.push(element);
      return longestWord(match);
    }
  }
};

console.log(stringSequence);
console.log(dictionary);
console.log(longestMatch(stringSequence, dictionary));