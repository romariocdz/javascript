var val = Number.parseFloat(window.prompt('Quanto está a cotação do dolar agora?'))//valor do Dolar
   
function verificar() {
   var din = (Number.parseFloat(window.prompt('Qual o valor que deseja converter:')))
            var convert = val*din //um real equivale a x valor dolar
                    var res = document.getElementById('res')
            res.innerText = (`O valor de R$ ${din} pode comprar em US$ é ${convert.toFixed(2).replace('.', ',')}`)                    
    }