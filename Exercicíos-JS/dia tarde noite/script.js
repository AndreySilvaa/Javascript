function verificar() {
    var agora = new Date()
    var hora = agora.getHours()
    var res = document.getElementById('msg')
    var imagem = document.getElementById('foto')

    res.innerHTML = `Agora são ${hora} horas`

    if (hora >= 5 && hora <= 12) {
        //manhã
        imagem.src = 'img/fotomanha.png'
        document.body.style.backgroundColor = '#b5ddfc'
    } else if (hora >= 12 && hora <=18) {
        //Tarde
        imagem.src = 'img/fototarde.png'
        document.body.style.backgroundColor = '#eca873'
    } else {
        //Noite
        imagem.src = 'img/fotonoite.png'
        document.body.style.backgroundColor = '#9075ac'
    }
}