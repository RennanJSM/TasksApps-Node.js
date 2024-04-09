const string = 'teste'

function inverter() {
    const contador = string.length;
    let n = 1;
    let invertido = '';

    for (let i=1;i<=contador;i++) {

        invertido += string[contador - n];
        n++;

    }

    return invertido
}

console.log(inverter());

