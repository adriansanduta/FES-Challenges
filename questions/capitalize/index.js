/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
    const result = [];
    for (let char of str.split("")) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        return capitalizedWord;
    }
  return str.split(" ")
};

module.exports = capitalize;
