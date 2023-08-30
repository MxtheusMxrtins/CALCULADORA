const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ')

function insert(valor) { // definiu a função insert pra receber um valor
    resultado.innerHTML += valor;    // innerHTML manda o valor pro espaço em branco do HTML <p>
}

function clean() { // definiu a função clean pra zerar o visor
    resultado.innerHTML = ' '; // por isso esta sem valor algum
}

function backspace() {
    if (resultado.textContent) { // se existir algo dentro do resultado
        let result = document.getElementById('resultado').innerHTML  // defini o resultado pelo id e imprime no html
        resultado.innerHTML = result.substring(0, result.length - 1); // pega o resultado que esta no html e reduz um caractere a começar pelo 0
    }
}

function confirma() {
    if (resultado.textContent != 'Erro') { // se nao ouver nenhum erro
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML) // pega o resultado imprime no html e realiza a conta

    }
}