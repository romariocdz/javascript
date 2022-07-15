function carregar() {
var hor = window.document.getElementById("dia")
    var data2 = window.document.getElementById("data")
        var img = window.document.getElementById("imagem")
    var time = new Date()
        var hora = time.getHours()
                var dat = new Date()
                    var dia1 = dat.getDate()
            
    
        dia.innerHTML = `Agora são ${hora} horas e hoje é dia ${dia1}`

            if (hora >= 0 && hora < 12) {
                    foto.src = "imagens/manha.png" 
                    document.body.style.background = "#e7e5e6"
                    document.body.style.color ="#e5b894"

                } else if(hora >= 12 && hora < 18){
                    foto.src = "imagens/tarde.png"
                    document.body.style.color = "#fe5b01"
                    document.body.style.background = "#fe5b01"
                
                    
                } else {
                        foto.src = "imagens/noite.png"
                        document.body.style.background = "#3a2c45"
                        document.body.style.color = "#382b46"
            }
}    