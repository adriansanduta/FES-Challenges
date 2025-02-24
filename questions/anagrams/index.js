/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
  const charMapA = new Map();
  const charMapB = new Map();

  for (const char of strA.toLowerCase().replaceAll(" ", "")) {
    charMapA.set(char, charMapA.get(char) + 1 || 1);
     }
  for (const char of strB.toLowerCase().replaceAll(" ", "")) {
        charMapB.set(char, charMapB.get(char) + 1 || 1);
    } 
    
    return [charMapA, charMapB];
};



module.exports = anagrams;
