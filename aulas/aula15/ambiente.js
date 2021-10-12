let num = [5, 8, 2, 9, 3]

num.push(1) /* Adiciona um elemento*/
num.sort()  /* Ordena os elementos*/
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
let pos = num.indexOf(2)  /* Diz qual a chave -posição- do elemento. Se não for encontrada o valor fica -1 */

if (pos == -1) {
    console.log('A posição não foi encontrada')
} else {
    console.log(`O valor está na posição ${pos}`)
}