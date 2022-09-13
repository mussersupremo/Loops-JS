//Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos.
//Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE)

let idade = 0; jovem = 0; idoso = 0

while(idade != -99){
    idade = Number(prompt("Digite uma idade: "))
    if(idade <= 21){
        jovem++
    }
    if(idade >= 50){
        idoso++
    }
}
alert(`Total de pessoas jovens é de ${jovem}`)
alert(`Total de pessoas idosas é de ${idoso}`)