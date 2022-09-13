let idade; sexo; humor
let mulherNerv = 0; homemAgr = 0; calm = 0; pNerv = 0; pCalm = 0; i = 0

while(i <= 150)
{
    idade = Number(prompt("Digite a sua idade:"))
    sexo = Number(prompt("Digite a seu sexo: 1 - M / 2 = F / 3 - Outros"))
    humor = Number(prompt("Digite a seu humor: 1 - Calmo / 2 - Nervosa / 3 - Agressivo"))
    if(humor === 1)
    {
        calm++
    }
    if(humor === 2 && sexo === 2)
    {
        mulherNerv++
    }
    if(humor === 3 && sexo === 1)
    {
        homemAgr++
    }
    if(humor === 3 && idade >= 40)
    {
        pNerv++
    }
    if(humor === 1 && idade < 18)
    {
        pCalm++
    }
}
alert(`o número de pessoas calmas é de ${calm}!!`)
alert(`o número de mulheres nervosas é de ${mulherNerv}!!`)
alert(`o número de homens agressivos é de ${homemAgr}!!`)
alert(`o número de outros calmos é de ${pNerv}!!`)
alert(`o número de pessoas nervosas com mais de 40 anos é de ${pCalm}!!`)
