function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora}  horas. `
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png.jpg'
        document.body.style.background = '#fdb640'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png.jpg'
        document.body.style.background = '#84525e'
    } else {
        img.src = 'imagens/noite.png.jpg'
        document.body.style.background = '#162844'
    }
}

