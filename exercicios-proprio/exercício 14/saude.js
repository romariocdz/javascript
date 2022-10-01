
function converter() {
    var hora = document.getElementById('hora')
    var time = Number(hora.value)
        var res = document.getElementById('resul')     
    if(time >= 1 && time < 10) {
            var points = 2    
        var cash = points*0.5      
        } else if(time >= 10 && time < 20) {
            var points = 5
            var cash = points*0.5
        } else {
            var points = 10
            var cash = points*0.5
        }  
        res.innerHTML = `Você fez ${time} horas de atividades fisicas e por isso recebeu ${points} pontos que podem ser trocados por ${cash.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
        
    }
