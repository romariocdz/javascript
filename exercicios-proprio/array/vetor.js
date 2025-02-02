function vetores() {
    var carros = document.getElementById("num_carros")
    var cars = Number(carros.value)
    var vetor = []
    let resul = document.getElementById("resul")
    if(cars == 0) {
        window.alert("Por favor, Digite um valor diferente de zero.")
    }
    else {
        for(pos=0; pos < cars; pos++) {
            vetor.push(pos)
        }
        resul.innerHTML = `Total de carros ${vetor.length}`
    }
}