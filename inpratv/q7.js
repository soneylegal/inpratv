function emitirAviso(fcEmRepouso, fcAtual, oxigenacao) {
    if (fcAtual > 3 * fcEmRepouso || oxigenacao < 95) {
        return 'diminuir';
    } else if (fcAtual < 2 * fcEmRepouso && oxigenacao > 97) {
        return 'aumentar';
    } else {
        return 'manter';
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fcEmRepouso, fcAtual, oxigenacao;

rl.question('Digite a frequência cardíaca em repouso: ', (answer) => {
    fcEmRepouso = parseInt(answer);
    rl.question('Digite a frequência cardíaca atual: ', (answer) => {
        fcAtual = parseInt(answer);
        rl.question('Digite a capacidade de oxigenação atual: ', (answer) => {
            oxigenacao = parseInt(answer);

            let aviso = emitirAviso(fcEmRepouso, fcAtual, oxigenacao);
            console.log(aviso);

            rl.close();
        });
    });
});

// 60
// 119
// 98

// 60
// 190
// 100

// 50
// 100
// 95

// 50
// 100
// 94