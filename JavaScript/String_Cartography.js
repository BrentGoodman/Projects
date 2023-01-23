word = ('mississippi')

console.log(word);

function mapString(string, ___) {
  let map = {
    ___: ___
  };
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [
        i,
        ___
      ];
    }
  }
  return map;
};
let stringMap = mapString(word);
for (let letter in stringMap) {
  console.log(letter + ': ' + stringMap[letter]);
}