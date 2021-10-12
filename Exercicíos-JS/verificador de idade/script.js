function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var anonasc = Number(fano.value)


    if (fano.value.length == 0 || anonasc > ano) {
        try {
            fano = prompt('[ERRO] Digite o ano novamente:')
            anonasc = Number(fano.value)
            if (fano == '' || anonasc > ano) {
                throw new Error('Sua data de nascimento está inválida')
            } else {
                confirm('Não deixe a data em branco e também não a coloque maior do que o ano atual. Por favor, tente novamente.')
            }
        } catch (e) {
            alert(e.message)
        } finally {
            console.log('FIM DO PROGRAMA')
        }
    } else {
     var genero = ''
     var imagem = document.createElement('img')
     var fsex = document.getElementsByName('radsex')
     var idade = ano - anonasc
     res.innerHTML = ''

     if (fsex[0].checked) {
         genero = 'Homem'
        if (idade < 10) {
            //Criança
            imagem.src='img/foto-bebe-m.png'
        } else if (idade < 24) {
            //Jovem
            imagem.src='img/foto-jovem-m.png'
        } else if (idade < 60) {
            //Adulto
            imagem.src='img/foto-adulto-m.png'
        } else {
            //Idoso
            imagem.src='img/foto-idoso-m.png'
        }
     } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade < 10) {
            //Criança
            imagem.src='img/foto-bebe-f.png'
        } else if (idade < 24) {
            //Jovem
            imagem.src='img/foto-jovem-f.png'
        } else if (idade < 60) {
            //Adulta
            imagem.src='img/foto-adulto-f.png'
        } else {
            //Idosa
            imagem.src='img/foto-idoso-f.png'
        }
     }
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
        res.appendChild(imagem)
    }

}








/*
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let fsex = document.getElementsByName('radsex')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Data de nascimento inválida!')
    } else {
        let anonasc = Number(fano.value)
        let imagem = document.createElement('img')
        let genero = ''
        let idade = (ano - anonasc)
        res.innerHTML = ''

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade <= 12) {
                // Criança
                imagem.src = 'img/foto-bebe-m.png'
            } if (idade <= 20) {
                // Jovem
                imagem.src = 'img/foto-jovem-m.png'
            } if (idade <= 50) {
                // Adulto
                imagem.src = 'img/foto-adulto-m.png'
            } else {
                // Idoso
                imagem.src = 'img/foto-idoso-m.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10) {
                // Criança
                imagem.src = 'img/foto-bebe-f.png'
            } if (idade <= 20) {
                // Jovem
                imagem.src = 'img/foto-jovem-f.png'
            } if (idade <= 50) {
                // Adulto
                imagem.src = 'img/foto-jovem-f.png'
            } else {
                // Idoso
                imagem.src = 'img/foto-jovem-f.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(imagem)

    }
}
*/