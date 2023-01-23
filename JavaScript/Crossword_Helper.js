randomWord = random('hello', 'super', 'amazing', 'maybe', 'completely')

function lastLetter(list, ___) {
    let result = list.length - 1;
    return list[result];
  };
  console.log(lastLetter(randomWord));

function check(space, word, ___) {
  if (space.length !== word.length) {
    return false;
  }
  for (let i = 0; i < space.length; i++) {
    if (space[i] !== '-' && space[i] !== word[i]) {
      return false;
    }
  }
  return true;
};
console.log('-e--o');
console.log(randomWord);
console.log(check('-e--o', randomWord));