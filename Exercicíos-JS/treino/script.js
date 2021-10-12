let txtn = document.getElementById('txtn')
let valores = []
let resultado = document.getElementById('res')
let tab = document.getElementById('seltab')
let maior = 0
let menor = 1000
let total = 0

function nalista(v) {
    let pos = valores.indexOf(v)
    return pos
}

function add() {
    let n = Number(txtn.value)

    if (nalista(n) == -1) {
        if (n < 1 || n > 100 || txtn.value.length == 0 ) {
            alert('Adicione um número correto!')
        } else {
            valores.push(n)  
            let item = document.createElement('option')
            item.innerHTML += `VALOR ${n} ADICIONADO. <br>`
            tab.appendChild(item)
            
            if (n > maior) {
                maior = n
            }

            if (n < menor) {
                menor = n
            }

            resultado.innerHTML = ''
        }
    } else {
        alert('Valor já adicionado')
    }
}

function fim() {
    let resposta = document.createElement('h3')
    resposta.innerHTML = `Os valores adicionados foram ${valores} <br>`
    resposta.innerHTML += `Foram ${valores.length} números cadastrados no total <br>`
    resposta.innerHTML += `O maior valor foi ${maior} <br>`
    resposta.innerHTML += `O menor valor foi ${menor} <br>`

    for (let c = 0; c < valores.length; c++) {
        total = total + valores[c]
    }

    resposta.innerHTML += `A soma de todos os valores foi ${total} <br> `
    resposta.innerHTML += `A média de todos os números foi ${total / valores.length}`
    resultado.appendChild(resposta)
    valores = []
    maior = 0
    menor = 1000
    total = 0
    tab.innerHTML = ''
}
