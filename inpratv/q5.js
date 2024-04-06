function idadeBianca(idadeBeatriz, idadeBianca, idadeBruna) {
    let idades = [idadeBeatriz, idadeBianca, idadeBruna];
    idades.sort((a, b) => a - b);
    return idades[1];
}

console.log(idadeBianca(6, 9, 7));
console.log(idadeBianca(34, 36, 38));
console.log(idadeBianca(22, 25, 22));
console.log(idadeBianca(91, 87, 93));