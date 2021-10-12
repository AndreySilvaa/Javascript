function tabuada() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(txtn.value)
        tab.innerHTML = ''
        txtn.value = ''
        txtn.focus()

        for (let c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.innerHTML += ` ${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}