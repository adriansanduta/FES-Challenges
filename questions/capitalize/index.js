/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

/** const capitalize = (str) => {
    const result = [];
    for (let word of str.split(" ")) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        result.push(capitalizedWord)
    }
  return result.join(" ");
};

module.exports = capitalize; */

const capitalize = (str) => {
  let result = str[0].toUpperCase();

  for(let i = 1; i < str.length; ++i){
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } 
    else {
        result += str[i];
  }
}
  return result;
};

module.exports = capitalize;
