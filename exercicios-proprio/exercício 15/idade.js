function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERROR!] Revise os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
     if(fsex[0].checked) {
        gênero = 'Homem'
     if(idade > 0 && idade < 10){
        img.setAttribute('src', 'bc.png')
     } else if(idade >= 10 && idade < 21){
        img.setAttribute('src', 'jovemhomem.png')
     } else if(idade < 50) {
        img.setAttribute('src', 'ha.png')
    } else if(fsex[1].checked) {
        gênero = 'Mulher'
        if(idade > 0 && idade < 10) {
            img.setAttribute('src', 'gc.png')
         } else if(idade >= 10 && idade < 21){
            img.setAttribute('src', 'jovemwoman.png')
         } else if(idade < 50) {
            img.setAttribute('src', 'wa.png')
         } else {
            img.setAttrtibute('src', 'womanid.png')
         } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
  }
}
}
    