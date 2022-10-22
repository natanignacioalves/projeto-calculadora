const resultado = document.querySelector('.result')
const confirmar = document.querySelector('.igual')

function insert(valor) {
    resultado.innerHTML += valor;  // += para concatenar os valores e não sobrescrever
}

function clean() {
    resultado.innerHTML = '';
}

function backspace() {
    if(resultado.textContent) { //se tiver algo dentro do bloco "p"
        let result = document.getElementById('resultado').innerHTML  // "p" recebe result
        resultado.innerHTML = result.substring(0, result.length -1); //length-comprimento da result -1
    }
}

function confirma() {
    if (resultado.textContent != 'Erro') { //Se for diferente de "erro" irá executar o codigo
        try {    
            document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
        }catch(e) {  
            resultado.innerHTML = ''; //Com "try catch" se houver erro ele retornará catch
        }
    } 
}