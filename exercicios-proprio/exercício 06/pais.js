function origem() {
  var origemtxt = window.document.querySelector('input#txtp')
   
  var origemtxt2 = window.document.querySelector('input#onde')

  var res = window.document.querySelector('div#res')
  var estrang = 'Você é estrangeiro'
  var nat = 'Você é nativo'

  if(origemtxt.value != origemtxt2.value) {
      res.innerText = `${estrang}` 
  } else
  if(origemtxt.value == origemtxt2.value) {
    res.innerText = `${nat}`
  }
}
