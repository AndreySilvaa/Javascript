let addtxt = document.getElementById('add')
let remotxt = document.getElementById('remo')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let canivete = ''
let lanterna = ''
let pilha = ''
let isqueiro = ''
valores = []

function nalista(v, l) {
    if (l.indexOf(v) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (addtxt.value.length == 0) {
        alert('Faltam dados!')
    } else {
        let add = Number(addtxt.value)
        if (nalista(add, valores) || add < 1 || add > 4) {
            alert('[ERRO] Item já adicionado ou inválido.')
        } else {
            valores.push(add)
            addtxt.value = ''
            addtxt.focus()
            switch (add) {
                case 1:
                    let item = document.createElement('option')
                    item.innerHTML += `Canivete adicionado`
                    canivete = 'sim'
                    tab.appendChild(item)
                    break
                case 2:
                    let ite = document.createElement('option')
                    ite.innerHTML += `Lanterna adicionada`
                    lanterna = 'sim'
                    tab.appendChild(ite)
                    break
                case 3:
                    let it = document.createElement('option')
                    it.innerHTML += `Pilha adicionada`
                    pilha = 'sim'
                    tab.appendChild(it)
                    break
                case 4:
                    let i = document.createElement('option')
                    i.innerHTML += `Isqueiro adicionado`
                    isqueiro = 'sim'
                    tab.appendChild(i)
                    break
                default:
            }
        }
    }
}

function foradalista(v, l) {
    if (l.indexOf(v) == -1) {
        return true
    } else {
        return false
    }
}

function remover() {
    if (remotxt.value.length == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        let remo = Number(remotxt.value)
        if (foradalista(remo, valores) || remo < 1 || remo > 4) {
            alert('Item já está fora da lista ou é inválido')
        } else {
            let v = valores.indexOf(remo)
            valores.splice(v, 1)
            remotxt.value = ''
            remotxt.focus()
            switch (remo) {
                case 1:
                    let meti = document.createElement('option')
                    meti.innerHTML = `Canivete removido`
                    canivete = 'não'
                    tab.appendChild(meti)
                    break
                case 2:
                    let met = document.createElement('option')
                    met.innerHTML = `Lanterna removida`
                    lanterna = 'não'
                    tab.appendChild(met)
                    break
                case 3:
                    let me = document.createElement('option')
                    me.innerHTML = `Pilha removida`
                    pilha = 'não'
                    tab.appendChild(me)
                    break
                case 4:
                    let m = document.createElement('option')
                    m.innerHTML = `Isqueiro removido`
                    isqueiro = 'não'
                    tab.appendChild(m)
                    break
                default:
            }
        }
    }
}

function fim() {
    let imgcani = document.getElementById('cani')
    let imglant = document.getElementById('lant')
    let imgpilha = document.getElementById('pilha')
    let imgisque = document.getElementById('isque')
    if (valores.length == 0) {
        alert('Adicione algum item.')
    } else {
        if (canivete == 'sim') {
            imgcani.src = 'img/canivete.png'
        } else {
            imgcani.src = 'img/X-não.png'
        }
        if (lanterna == 'sim') {
            imglant.src = 'img/lanterna.png'
        } else {
            imglant.src = 'img/X-não.png'
        }
        if (pilha == 'sim') {
            imgpilha.src = 'img/pilha.png'
        } else {
            imgpilha.src = 'img/X-não.png'
        }
        if (isqueiro == 'sim') {
            imgisque.src = 'img/isqueiro.png'
        } else {
            imgisque.src = 'img/X-não.png'
        }
        
        let nomecanivete = document.getElementById('nomeca').style.display = "inline-block"
        let nomelanterna = document.getElementById('nomela').style.display = "inline-block"
        let nomepilha = document.getElementById('nomepi').style.display = "inline-block"
        let nomeisqueiro = document.getElementById('nomeis').style.display = "inline-block"
    }
}

function limpar() {
    tab.innerHTML = ''
    valores = []
    lanterna = ''
    canivete = ''
    pilha = ''
    isqueiro = ''
    let imgcani = document.getElementById('cani')
    let imglant = document.getElementById('lant')
    let imgpilha = document.getElementById('pilha')
    let imgisque = document.getElementById('isque')
    imgcani.src = " "
    imglant.src = " "
    imgpilha.src = " "
    imgisque.src = " "
    let nomecanivete = document.getElementById('nomeca').style.display = "none"
    let nomelanterna = document.getElementById('nomela').style.display = "none"
    let nomepilha = document.getElementById('nomepi').style.display = "none"
    let nomeisqueiro = document.getElementById('nomeis').style.display = "none"
}