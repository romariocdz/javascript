function convert() {
    var a = window.prompt('digite uma temperatura em grau Celsius')
        var temper = Number.parseFloat(a)
            var cf = (temper * 9/5) + 32
                var ck = temper + 273.15
            var intro = document.getElementById('intro')
        var res = document.getElementById('resul')
    var res1 = document.getElementById('resul2')
        intro.innerText = `A temperatura ${temper} ºC corresponde a...`
    intro.style.fontSize = '24pt'
        intro.style.fontFamily = 'Fantasy'
                res.style.fontFamily ='Arial'
                    res1.style.fontFamily = 'Arial'
            res.innerText = `${temper} em grau Celsius equivale a ${cf}F (Fahrenheit)`
                res1.innerText = `${temper} em grau Celsius equivale a ${ck}K (Kelvin)`

            
}