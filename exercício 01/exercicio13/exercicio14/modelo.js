function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var mini = new Date
 var min  = mini.getMinutes()
var horario = data.getHours()
msg.innerHTML = `agora são ${horario} horas e ${min} minutos`
if (horario >= 0 && horario < 12) {
    //bom dia
      img.src = "imagens/manha.png"
      document.body.style.background = "#4f7b93"
    
} else if (horario >= 12 && horario < 18) {
     //boa tarde
       img.src = "imagens/tarde.png"
         document.body.style.background = "#bfb0a3"
} else { 
   //boa noite
    img.src = "imagens/noite.png" 
    document.body.style.bakground = "#"
}

}