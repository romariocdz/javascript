var nome = prompt('escreva aqui seu nome')
alert('prazer em te conhecer ' + nome)//o mais é usado para unir a string ao alerta.
var sobrenome = prompt('digite seu sobrenome')
alert(`seu sobrenome é ${sobrenome}`)// `${}` têm a função de mostrar o valor da variável sem a necessidade de color car o sinal de + (concatenação para string)
var n1 = Number.parseInt(prompt('digite aqui um número'))//Number.parseInt converte o prompt(string) em Número(number). obs:parseInt é para converter em números inteiros.
var n2 = Number.parseInt(prompt('Digite outro numero'))

var soma = n1 + n2 
soma.toLocaleString('pt-BR', {Style:'currency', currency:'BRL'})
alert('a soma entre eles é: ' + soma)


//atributo var.Length
var segundo_nome = prompt('Digite seu segundo nome') 
document.writeln(`Seu nome tem ${segundo_nome.length} letras`)//document.write exibe a resposta na tela
document.writeln(`Seu nome em letras maiusculas é ${segundo_nome.toUpperCase()}`)//toUpperCase() deixa toda a string em letras maiúsculas

