let addtxt = document.getElementById('add')
let remotxt = document.getElementById('remo')
let seltab = document.getElementById('seltab')
let valores = []

function fdlista(n, l) {
    if (l.indexOf(n) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (addtxt.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        let add = Number(addtxt.value)
        if (fdlista(add, valores)) {
            valores.push(add)
            let item = document.createElement('option')
            item.innerHTML += `<p> Valor ${add} adicionado. </p>`
            seltab.appendChild(item)
        } else {
            alert('Valor já adicionado')
        }
    }
}

function nalista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function remover() {
    if (remotxt.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        let remo = Number(remotxt.value)
        if (nalista(remo, valores)) {
            let v = valores.indexOf(remo)
            valores.splice(v,1)
            let item = document.createElement('option')
            item.innerHTML += `<p> Valor ${remo} removido.`
            seltab.appendChild(item)
        } else {
            alert('O valor não foi adicionado')
        }
    }
}