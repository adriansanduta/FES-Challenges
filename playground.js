const palindrome = (str) => {
    const middle = Math.floor(str.length / 2);
    for (let i =0; i < middle; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(palindrome('abcdba')); 