//Ler 10 números e imprimir quantos são pares e quantos são ímpares. COM O FOR

let num; par = 0; impar = 0

for(let i = 1; i <= 10; i++){

    num = Number(prompt("Digite um número:"))
    if(num % 2 == 0){
        par++
    }
    else{
        impar++
    }

}
alert(`A quantidade de numeros pares é de ${par}, e a de impares é de ${impar}!!`)