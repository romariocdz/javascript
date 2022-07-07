function comprar() {
var compra = prompt('Qual o produto você está comprando')

var preço = prompt(`Quanto custa ${compra} que você está comprando`)
        
    Number.parseFloat(preço)
      
        var valor = prompt(`qual o valor que você deu para pagar ${compra} ?`) 
                Number.parseInt(valor)
        var res = preço - valor   
              Number.parseInt(res)

                 
window.alert(`Você comprou ${compra} que custou R$ ${preço}. Deu R$ ${valor} em dinheiro e vai receber R$ ${res} de troco.
Volte Sempre!`)

}