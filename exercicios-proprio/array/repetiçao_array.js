let vetor = [1, 4, 2, 3, 5]
//console.log(vetor) primeira forma de mostrar um vetor.
/*console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[4])
segunda forma de mostrar os elementos de um vetor */
//Melhor forma de mostrar todos os elementos de um vetor usando estrutura de repetição.
/*
for(pos=0; pos < vetor.length; pos++){
    console.log(`O vetor na posição ${pos}, tem o valor ${vetor[pos]}`)
}*/

for(pos in vetor) {
    console.log(`O elemento na posição ${pos} possui o valor ${vetor[pos]}`)
}

