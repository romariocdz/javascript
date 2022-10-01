function checar() {
var dol = document.getElementById('dole')
    var dolar = Number.parseFloat(dol.value)
        var rel = document.getElementById('real')
            var rea = Number.parseFloat(rel.value)
              var mult = dolar * rea 
        var resul = document.getElementById('res')
    resul.innerHTML = `${mult.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}

