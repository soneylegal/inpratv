function AcaoCarro(A, B, C) {
    let distancia_AB = B - A;
    let distancia_BC = C - B;

    if (distancia_AB < distancia_BC) {
        return 1;
    } else if (distancia_AB > distancia_BC) {
        return -1;
    } else {
        return 0;
    }
}

let A = 80;
let B = 120;
let C = 132;

console.log(AcaoCarro(A, B, C));