var idade = 17
console.log(`Com ${idade} anos`)

if (idade < 16) {
    console.log('Você não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else (
    console.log('Voto obrigatório')
)