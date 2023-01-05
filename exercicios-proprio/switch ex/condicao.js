function verificar() {
    let nome = document.getElementById('login');
        let radiosex = document.getElementsByName('radiosex');
            let datanasc = document.getElementsByTagName('input')[3];
               let residade = document.getElementById('idadecand'); 
                let data = new Date(); 
                    let ano = data.getFullYear();
                let idade = ano - Number(datanasc.value); //Calculo da idade
            let nomecand = document.getElementById('nomecand');
        nomecand.innerText =  `${nome.value}`; 
    let sexo = document.getElementById('sexcand')
let resultado = document.getElementById('resulq')// onde mostrar os resultados
if(radiosex[0].checked){
    sexo.innerText = 'Masculino';
    } else {
            sexo.innerText = 'Feminino';
}; 
    residade.innerText = `${idade} Anos`; 
    // as variáveis abaixo recebem os valores digitados pelo usuário!
    let quest01 = document.getElementById('quest1');
            let quest02 = document.getElementById('quest2');
        let quest03 = document.getElementById('quest3');
    let quest04 = document.getElementById('quest4');
  // abaixo está o gabarito(r1, r2, r3, r4)!
  let r1 = 9;
  let r2 = 4;
  let r3 = 5;
  let r4 = 5;
if(r1 == quest01.value && r2 == quest02.value && r3 == quest03.value && r4 == quest04.value){
    resultado.innerText = 'Você acertou todas a questões, parabéns'

}else{
    resultado.innerText = 'Você errou alguma questão: Tente novamente ou vejá o gabarito.'
}
}