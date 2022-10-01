function cal() {
var nome = document.getElementById('nome')
    var sexm = document.getElementsByName('radsex')  
            var salatual = document.getElementById('saf')
                var anocasa = document.getElementById('temp')
            var novosal = ''     
        var resul = document.getElementById('res')
        if (sexm[0].checked) {   
            if (anocasa.value <= 3) {
                var novosal = (salatual.value)*3/100 + (salatual.value)*1  
            } else if (anocasa.value >= 4 && anocasa.value < 10) {
                var novosal = (salatual.value)*12.5/100 + (salatual.value)*1
                
            } else {
                var novosal = (salatual.value)*20/100 + (salatual.value)*1
                
            }
            } else if (sexm[1].checked) {
                if(anocasa.value <= 3) {
                    var novosal = (salatual.value)*1.5/100 + (salatual.value)*1
                    
                } else if (anocasa.value >= 4 && anocasa.value < 10) {
                    var novosal = (salatual.value)*6.5/100 + (salatual.value)*1
                    
                } else {
                    var novosal = (salatual.value)*10/100 + (salatual.value)*1
                    
                }
            }   
    resul.innerHTML = `O sálario do funcionário ${nome.value} era de ${salatual.value} e agora é de ${novosal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}   
        
    