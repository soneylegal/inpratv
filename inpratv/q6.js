function Camisetas(N, tamanhos, P, M) {
    let contadorPequeno = 0;
    let contadorMedio = 0;
    
    for (let tamanho of tamanhos) {
        if (tamanho === 1) {
            contadorPequeno++;
        } else {
            contadorMedio++;
        }
    }
    
    if (contadorPequeno <= P && contadorMedio <= M) {
        return 'S';
    } else {
        return 'N';
    }
}

console.log(Camisetas(5, [1, 1, 2, 1, 2], 3, 2));
console.log(Camisetas(4, [2, 2, 2, 2], 1, 3));
console.log(Camisetas(6, [1, 1, 1, 2, 1, 1], 4, 4));