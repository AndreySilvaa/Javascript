let txtn = document.getElementById('txtn')
let valores = []
let tab = document.getElementById('seltab')
let resposta = document.getElementById('res')
let maior = 0
let menor = 1000
let total = 0

function add() {
    let n = Number(txtn.value)
    if (n == 0 || n < 0 || n > 100) {
        alert(['[ERRO] Número inválido!'])
    } else {
        valores.push(n)
        let vadd = document.createElement('option')
        vadd.innerHTML = `Valor ${n} adicionado.`
        tab.appendChild(vadd)

        if (n > maior) {
            maior = n
        }

        if (n < menor) {
            menor = n
        }

        resposta.innerHTML = ''
    }
}

function fim() {
    if (txtn.value.length == 0) {
        alert(`Digite um número antes de finalizar.`)
    } else {
        let resultado = document.createElement('h3')
        resultado.innerHTML = `Os valores foram <strong>${valores}</strong> <br>`
        resultado.innerHTML += `Ao todo, temos <strong>${valores.length}</strong> números cadastrados. <br>`
        resultado.innerHTML += `O maior valor informado foi <strong>${maior}</strong> <br>`
        resultado.innerHTML += `O menor valor informado foi <strong>${menor}</strong> <br>`

        for (let c = 0; c < valores.length; c++) {
            total = total + valores[c]
        }

        resultado.innerHTML += `Somando todos os valores temos <strong>${total}</strong> <br>`
        resultado.innerHTML += `A média dos valores digitados é <strong>${total / valores.length}</strong>`
        resposta.appendChild(resultado)
        valores = []
        maior = 0
        menor = 10000
        total = 0
        tab.innerHTML = ''
        
    }

}
