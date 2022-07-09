var agora = new Date()
var hora = agora.getHours()

if (hora >= 5 && hora <= 11.59) {
    console.log('Bom dia trabalhador brasileiro')
} else if(hora >= 12 && hora <= 18.59) {
    console.log('Boa tarde dona Maria')
} else if(hora >= 19 && hora <= 23) {
    console.log('Boa noite seu josé')
} else {
    console.log('boa madrugada')
}