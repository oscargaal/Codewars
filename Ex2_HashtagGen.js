function generateHashtag(str) {
    let words = str.trim().split(/\s+/).map((word, i) => {
        return [word, i]
    })
    return words.join("")
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))  //"#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   "))                  //"#HelloWorld"
console.log(generateHashtag(""))                                        //false