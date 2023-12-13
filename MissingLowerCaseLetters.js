function letters(word) {
    // Implement the function here
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerAlphabetNotExist = [];
    for(let i=0;i<lowerAlphabet.length;i++){
        if(!word.includes(lowerAlphabet[i])){
            lowerAlphabetNotExist.push(lowerAlphabet[i]);
        }
    }
    return lowerAlphabetNotExist;
}

const word = 'can';

letters(word) // => 'bdefghijklmopqrstuvwxyz'.split('')
console.log(letters(word));