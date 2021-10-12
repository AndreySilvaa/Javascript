function contar() {
    var txtni = document.getElementById('txti')
    var txtnf = document.getElementById('txtf')
    var txtnp = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (txtni.value.length == 0 || txtnf.value.length == 0 || txtnp.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        var ni = Number(txtni.value)
        var nf = Number(txtnf.value)
        var np = Number(txtnp.value)
        res.innerHTML = 'Contando... <br><br>'

        if (np == 0) {
            alert('[ERRO] Passo inválido, considerando passo 1')
            np = 1
        }

        if (ni < nf) {
            for (var c = ni; c <= nf; c += np) {
                res.innerHTML += ` ${c} \u{2794}`
            }
        } else if (ni > nf) {
            for (var c = ni; c >= nf; c -= np) {
                res.innerHTML += ` ${c} \u{2794}`
            }
        }
    }

    res.innerHTML += `\u{1F3C1}`

}

