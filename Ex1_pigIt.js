function pigIt(string) {
    let word = string.split(" ")
    console.log(word)
    
    for(let i = 0; i < word.length; i++) {
        if (/^[a-zA-Z]+$/.test(word[i])) {
            let firstLetterWord = word[i][0]
            let restOfWord = word[i].slice(1)
            word[i] = restOfWord + firstLetterWord + "ay"

        }
    }
    return word.join(" ");
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !