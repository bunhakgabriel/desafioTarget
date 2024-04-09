//Voce pode colocar uma string com mais de uma palavra ou uma palavra unica que ira funcionar, neste exemplo temos 3 palavras na string 
let inicialString = 'Uma String qualquer' 
let novaString = ''

let indice = inicialString.length

while(novaString.length < inicialString.length){
    const letra = inicialString[indice - 1]
    novaString = novaString + letra
    indice--
}

console.log(`String inicial: ${inicialString}`)
console.log(`String invertida: ${novaString}`)