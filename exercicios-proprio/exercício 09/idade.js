 function verificar() {
    var data = new Date()
      var ano = data.getFullYear()
         var fano = document.getElementById('txtano')
             
            var res = document.querySelector('div#res')
            if ( fano.value == 0 || Number(fano.value) > ano ) {
               window.alert ('[ERRO] Verifique os dados e tente novamente!')
           } else {
               var fsex = document.getElementsByName('radsex')
               var idade = ano - Number(fano.value) // faz a conta do anos
               var genero = ''
                  var img = document.createElement('img')
                     img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
               genero = 'Homem'
                  if (idade >= 0 && idade < 11) {
                     img.setAttribute ('src', 'imagens/bc.png')
                  } else if (idade >= 11 && idade < 21) {
                     img.setAttribute('src', 'imagens/jh.png')
                  } else if (idade >= 21 && idade < 40) {
                     img.setAttribute('src', 'imagens/ha.png')
                  } else if (idade >= 40) {
                     img.setAttribute('src', 'imagens/manid')
                  }
            } else if (fsex[1].checked) {
               genero = 'Mulher'
                  if(idade >= 0 && idade < 11) {
                     img.setAttribute('src', 'imagens/gc.png')
                  } else if (idade >= 11 && idade < 21){
                     img.setAttribute('src', 'imagens/jm.png')
                  } else if (idade >= 21 && idade < 40) {
                     img.setAttribute('src', 'imagens/wa.png')
                  } else if (idade >= 65) {
                     img.setAttribute('src', 'imagens/mv.png')
                  }
            }
          res.style.textAlign = 'center'  
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
           }
 }