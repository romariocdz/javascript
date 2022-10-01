function verificar() {
   var dica = window.prompt('Digite o ano que deseja verificar') 
        var ano = Number.parseInt(dica)
      var res = document.getElementsByName('resul')[0]
            var posit = "É Bissexto"
                var negat = "Não é bissexto"
                    res.style.textAlign = 'center'
            if(ano % 4 == 0 || ano % 400 == 0 && ano % 100 != 0) {
                res.innerText = `O ano de ${ano} ${posit}`
            } else {
               res.innerText = `O ano de ${ano} ${negat}` 
            }
       
}