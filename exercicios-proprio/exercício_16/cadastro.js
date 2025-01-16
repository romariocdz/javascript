
function validar() {
    if(document.formulario.busca.php.value = "") {
        window.alert("Preencha os campos requisitados!")
        document.formulario.nome.focus()  
        return false
    } 
         
     return true   
}