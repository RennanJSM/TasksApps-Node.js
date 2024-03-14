function fib() {

    let contador = 50
    const termos = []
    termos.push(0, 1)

    for (let i = 0; i < contador; i++) {
        termos.push(termos[termos.length - 1] + termos[termos.length - 2])
    }

    return termos

}

//console.log(fib())

const sequencia = fib();

const readline = require('node:readline').createInterface({

    input: process.stdin,
    output: process.stdout,

});

readline.question('Digite o número que você deseja conferir: ', n => {
    

    if (sequencia.includes(parseInt(n))) {

        console.log('O número está presente na sequência de Fibonacci')
    
    }
    else {
        console.log('O número não está presente na sequência de Fibonacci')
    }
    readline.close();
})
