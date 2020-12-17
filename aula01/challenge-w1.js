// Declarar uma variável chamada `myvar`, sem valor.
let myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;
console.log(myvar)

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1
console.log(soma)

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log(soma);

// Qual é o valor da variável `soma` até aqui?
console.log('O valor da variavel soma é 72.')

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
const souninja = true;
console.log(souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
const comida = ['arroz', 'feijao', 'ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if(soma === myvar){
    console.log('é igual')
} else {
    console.log('é diferente')
}
// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if (myvar <= soma){
    console.log('E menor')
} else {
    console.log('E maior')
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(n1, n2){
    return n1 / n2
}
console.log(divisao(10, 5));

// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log(divisao(10, 2));
