function verificar(){
var data = new Date()
   var ano = data.getFullYear()
      var nasc = document.querySelector('input#txtano')
          var res = document.querySelector('div#res')
               if (nasc.value == 0 || nasc.value > ano){
                     window.alert('[ERRO] Revise os dados e tente novamente')
                  } else {
                  var fsex = document.getElementsByName('radsex')
                     var idade = ano - Number(nasc.value)
               var genero = ''
            var img = document.createElement('img')
         img.setAttribute('id', 'mas')
      if (fsex[0].checked) {
         genero = 'Homem'
         if (idade >= 0 && idade < 11){
            img.setAttribute('src', 'imagens/bc.png')
         } else if (idade >= 12 && idade < 21) {
            img.setAttribute('src', 'imagens/jh.png')
         } else if (idade >= 21 && idade < 30) {
            img.setAttribute('src', 'imagens/ha.png')
         } else if (idade >= 50) {
             img.setAttribute('src', 'imagens/manid.png')
         }
      } else if(fsex[1].checked) {
         genero = 'Mulher'
               if (idade >= 0 && idade < 11) {
                    img.setAttribute('src', 'imagens/gc.png')
               } else if (idade >= 12 && idade < 21) {
               img.setAttribute('src', 'imagens/jm.png')
               } else if (idade >= 22 && idade < 40) {
                  img.setAttribute('src', 'imagens/wa.png')
               } else if (idade >= 50){
                  img.setAttribute('src', 'imagens/womanid.png')
               }
      }
   res.getElementsByClassName.textalign = 'center'
      
      res.innerHTML = `Detectamos ${genero}  com ${idade} anos`
            res.appendChild(img)
                           
               }
      
}
   