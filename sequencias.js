function a() {
    
    const sequencia_a = [];
    let n = 1;

    for (let i=1; i<=5;i++) {

        sequencia_a.push(n);
        n += 2;

    }

    return sequencia_a
} 

function b() {

    const sequencia_b = [];
    let n = 2;

    for (let i=1;i<=7;i++) {

        sequencia_b.push(n);
        n *= 2
    }

    return sequencia_b
}

function c() {

    const sequencia_c = [];
    let n = 0;
    let somador = 1;
    sequencia_c.push(0)

    for (let i=1;i<=14;i++) {

        if ((somador%2) != 0) {
            n += somador
            sequencia_c.push(n)
            somador++
        }
        else {
            somador++
        }

    }

    return sequencia_c
}

function d() {

    const sequencia_d = [];
    let n = 4;
    let multiplicador = 4;
    let somador = 1; 
    let anterior = 1;

    for (let i=1;i<=5;i++) {

        sequencia_d.push(n);
        somador += 2;
        anterior = multiplicador * somador;
        n += anterior
    }

    return sequencia_d
}

function e() {

    const sequencia_e = [];
    let n = 1;
    sequencia_e.push(n, n);
    for (let i=1;i<=5;i++) {

        sequencia_e.push(sequencia_e[sequencia_e.length - 1] + sequencia_e[sequencia_e.length - 2]);

    }

    return sequencia_e
}

function f() {

    const sequencia_f = [];
    sequencia_f.push(2, 10, 12, 16, 17, 18, 19, 200)

    return sequencia_f
}

console.log(a());
console.log(b());
console.log(c());
console.log(d());
console.log(e());
console.log(f());
