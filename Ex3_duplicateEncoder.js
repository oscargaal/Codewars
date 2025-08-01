function duplicateEncode(word) {
    let count = {}
    let lowerWord = word.toLowerCase()
    lowerWord.split("").forEach(char => {
        count[char] = (count[char] || 0) + 1
    });
    return lowerWord.split("").map((char) => count[char] > 1 ? ")" : "(").join("")
}

console.log(duplicateEncode("din"))        //"((("
console.log(duplicateEncode("recede"))     //"()()()"
console.log(duplicateEncode("Success"))    //")())())"
console.log(duplicateEncode("(( @"))      //"))((" 