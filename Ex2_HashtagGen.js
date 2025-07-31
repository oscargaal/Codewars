function generateHashtag(str) {
    if (str.trim() === "") {
        return false;
    }

    let words = str.trim().split(/\s+/).map((word) => {
        let upperFirstLetter = word[0].toUpperCase()
        let restOfWord = word.slice(1)
        let fullWord = upperFirstLetter + restOfWord
        return fullWord
    })

    let result = "#" + words.join("")
    if (result.length > 140) {
        return false;
    }
    else {
        return result
    }
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))  //"#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   "))                  //"#HelloWorld"
console.log(generateHashtag(""))                                        //false
