function checar(){
  var data = new Date()
    var ano = data.getFullYear()
       var fano = document.getElementById('ano') 
    var res = document.getElementById('res')
        if (fano.value == 0 || fano.value > ano) {
            res.innerHTML = '[ERRO!] REVISE OS DADOS E TENTE NOVAMENTE'
          } else {
                var idade = ano - Number(fano.value)
              var fsex = document.getElementsByName('radsex')
          var gênero = ''
              var img = document.createElement('img')
            img.setAttribute('id', 'foto')
          if(fsex[0].checked) {
            var gênero = 'Homem'
        if(idade > 0 && idade < 11){
          img.setAttribute('src', 'imagens/naruto(1).png')
        } else if(idade > 11 && idade < 24) {
          img.setAttribute('src', 'imagens/hj(1).png')
      } else {
        img.setAttribute('src', 'imagens/hv(1).png')
    }
      } else if(fsex[1].checked) {
          gênero = 'mulher'
      if(idade > 0 && idade < 11) {
          img.setAttribute('src', 'imagens/mc(1).png')
      } else if(idade > 11 && idade < 24) {
                    img.setAttribute('src', 'imagens/mj(1).png')
                  } else {
                   img.setAttribute('src', 'imagens/mv(1).png')
                  }
              } //mulheres 
                res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
                   res.appendChild(img)
    } //senão/else
} //function