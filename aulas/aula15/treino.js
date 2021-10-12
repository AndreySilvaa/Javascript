let valores = [4,2,7,5,9]
valores.push(1)
console.log(`${valores}`)
valores.sort()
console.log(`Os valores em ordem são ${valores}`)
let num = 4
pos = valores.indexOf(num)
console.log(`A posição do valor ${num} é ${pos}º`)

for (let c in valores) {
    console.log(valores[c])
}

