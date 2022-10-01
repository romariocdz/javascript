function verificar() {
var data = new Date()
   var ano = data.getFullYear()
      var fano = document.getElementById('txtano')
         var res = document.querySelector('div#res')
            if( fano.value == 0 || Number(fano.value) > ano)  {
                window.alert ('[ERRO] verifique os dados e tente novamente!')
            } else {
                var fsex = document.getElementsByName('radsex')
                   var idade = ano - Number(fano.value)
            var gênero = ''
               var img = document.createElement('img')
                  img.setAttribute('id', 'foto') 
        if( fsex[0].checked) {
            gênero = 'Homem'
              if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bc.png')
              } else if( idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem.png')
              } else if( idade < 50){
                    //adulto
                    img.setAttribute('src', 'imagens/ha.png')
              } else {
                //idoso 
                  img.setAttribute('src', 'imagens/manid.png')
              }
        } else if( fsex[1].checked) {
               gênero = 'Mulher'
               if (idade >= 0 && idade < 10) {
                //criança
                  img.setAttribute('src', 'imagens/gc.png')
              } else if( idade >= 10 && idade < 21) {
                //jovem
                  img.setAttribute('scr', 'imagens/jovemwoman.png')
              } else if( idade >= 21 && idade < 40){
                    //adulto
                    img.setAttribute('src', 'imagens/wa.png')
              } else {
                //idoso
                img.setAttribute('src', 'imagens/womanid.png')
              }
        }
            res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
                  res.appendChild(img)
            }
}         