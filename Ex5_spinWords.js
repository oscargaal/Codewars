function spinWords(string){
    let spinWord = ""
    string.split(" ").map((word) => {
        word.length >= 5 ? spinWord += word.split("").reverse().join("") + " " : spinWord += word + " "
    })
    return spinWord.trim()
}

console.log(spinWords("Hey fellow warriors"))   // "Hey wollef sroirraw" 
console.log(spinWords("This is a test"))        // "This is a test" 
console.log(spinWords("This is another test"))  // "This is rehtona test"

// Cosas a mejorar al ver soluciones, usar map para transformar arrays si no, usar forEach(), aprovechar el retorno del map para juntar las palabras con join(' ')