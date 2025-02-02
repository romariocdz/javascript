numbers = []
impar = []
for(pos=1; pos < 51; pos++) {
    numbers.push(pos)
    if(pos%2 !=0) {
        impar.push(pos)
    }
}
console.log(impar)