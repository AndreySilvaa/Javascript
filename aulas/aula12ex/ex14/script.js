function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/fotomanha.png'
        document.body.style.backgroundColor = '#b5ddfc'
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/fototarde.png'
        document.body.style.backgroundColor = '#eca873'
    } else {
        //BOA NOITE
        img.src = 'img/fotonoite.png'
        document.body.style.backgroundColor = '#9075ac'
    }
}

