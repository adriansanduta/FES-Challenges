/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
  const columnWidth = 2 * n -1;

  for (let row = 0; row < n; row++) {
    let step = "";

    for ( let column = 0; column < columnWidth; column++) {
        step += "#";
    } 
    console.log(step)
  }
};

module.exports = pyramid;
