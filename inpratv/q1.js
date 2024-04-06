function contaDigitos(ano) {
    return ano.toString().length === 4;
}

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function Mensagem(ano) {
    let anoAtual = new Date().getFullYear();

    if (!contaDigitos(ano)) {
        console.log("Ano invalido");
    } else if (ehBissexto(ano)) {
        if (ano < anoAtual) {
            console.log(`O ano ${ano} foi bissexto`);
        } else {
            console.log(`O ano ${ano} será bissexto`);
        }
    } else {
        console.log(`O ano ${ano} não é bissexto`);
    }
}

function processarEntrada(entrada) {
    let anos = entrada.split(" ");
    anos.forEach(ano => {
        Mensagem(parseInt(ano));
    });
}

let entrada = "1640 2000 2014 2000 2024 1924";
processarEntrada(entrada);