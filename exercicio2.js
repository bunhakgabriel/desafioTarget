
//A sequencia de fibonacci vai ir até o numero da linha 4
//Você pode altera-lo se quiser que o código continuara funcionando //Obs: não coloque numeros negativos, coloque numeros a partir de 1
let num = 2584

const calcularSequencia = () => {
    let num_fibonacci = [0,1]
    let c = 1
    
    while(c <= num){
        num_fibonacci.push(num_fibonacci[c-1] + num_fibonacci[c])
        
        if(num_fibonacci[c] >= num){
            num_fibonacci.pop()
            c = num
        }
        c++
    }
    
    verificarNumero(num_fibonacci)
}

const verificarNumero = (num_fibonacci) => {
    let resp = 'Não pertence'
    
    for(let valor of num_fibonacci){
        if(num == valor){
            resp = 'pertence'
        }
    }

    if(resp == 'Não pertence'){
        num_fibonacci.pop()
    }
    
    mostrarResposta(num_fibonacci, resp)
}

const mostrarResposta = (num_fibonacci, resp) => {
    console.log(`Numero digitado: ${num}`)
    console.log(`Sequência de fibonacci: ${num_fibonacci} \n`)
    console.log(`O numero digitado ${resp} a sequencia de fibonacci`)
}

calcularSequencia()