var txtn = document.getElementById('txtn')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var valores = []
var maior = 0
var menor = 1000
var soma = 0

function numerOK(v) {
    if (v < 0 || v > 100) {
        return true
    }
}


function nalista(v, l) {
    if (l.indexOf(v) != -1) {
        return true
    }
}

function add() {
    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(txtn.value)
        if (numerOK(n) || nalista(n, valores)) {
            alert('[ERRO] Valor inválido ou já adicionado.')
        } else {
            valores.push(n)
            var item = document.createElement('option')
            item.innerHTML=`Valor ${n} adicionado.`
            tab.appendChild(item)
            txtn.value = ''
            txtn.focus()

            if (n > maior) {
                maior = n
            }

            if (n < menor) {
                menor = n
            }
        }
    }

}

function fim() {
    res.innerHTML = `<p>Os valores adicionados foram ${valores} </p>`
    res.innerHTML += `<p> Foram, no total, ${valores.length} valores adicionados </p>`
    res.innerHTML += `<p> O maior valor adicionado foi ${maior} </p>`
    res.innerHTML += `<p> O menor valor adicionado foi ${menor} </p>`

    for (var c = 0; c < valores.length; c++) {
        soma += valores[c]
    }

    res.innerHTML += `<p> A soma de todos os valores adicionados foi ${soma}</p>`
    res.innerHTML += `<p> A média dos valores foi: ${soma / valores.length}`
    tab.innerHTML = ''
    valores = []
    maior = 0
    menor = 1000
    soma = 0
}


























































/*
let txtn = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []
let maior = 0
let menor = 1000
let total = 0

function isnumero(v) {
    if (v >= 0 && v <= 100) {
        return true
    } else {
        return false
    }
}

function nlista(v, l) {
    if (l.indexOf(v) == -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (txtn.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(txtn.value)
        if (isnumero(n) && nlista(n, valores)) {
            valores.push(n)
            txtn.value = ''
            txtn.focus()
            let item = document.createElement('option')
            item.innerHTML += `Valor ${n} adicionado.`
            tab.appendChild(item)

            if (n > maior) {
                maior = n
            }

            if (n < menor) {
                menor = n
            }

        } else {
            alert('[ERRO] Número inválido ou já adicionado.')
        }
    }
}

function fim() {
    tab.innerHTML = ''
    res.innerHTML = `<p>Os valores adicionados foram ${valores}</p>`
    res.innerHTML += `<p>Foram adicionados ${valores.length} elementos no total</p>`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`

    for (let c = 0; c < valores.length; c++) {
        total = total + valores[c]
    }

    res.innerHTML += `<p>A soma de todos os valores foi ${total}</p>`
    res.innerHTML += `<p>A média dos valores foi ${total / valores.length}</p>`
    menor = 1000
    maior = 0
    valores = []
    total = 0
}
*/