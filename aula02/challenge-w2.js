// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(5, 5));


// Declare uma variável que receba a invocação da função criada acima, passando 
//dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
somaFuncao = soma(10, 20) + 5;
console.log(somaFuncao);


// Qual o valor atualizado dessa variável? R: 35


// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function alteraValor(novoValor){
    valor = novoValor
    console.log(`O valor da variavel agora é ${valor}`)
}

// Invoque a função criada acima.
alteraValor(12)

// Qual o retorno da função? (Use comentários de bloco).


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function mult(arg1, arg2, arg3){
    if(arg1 === undefined || arg2 === undefined || arg3 === undefined){
        return 'Por favor preencha todos os valores corretamente!'
    }
    return (arg1 * arg2 * arg3) + 2
}

// Invoque a função criada acima, passando só dois números como argumento.
mult(1, 2);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Por favor preencha todos os valores corretamente


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(mult(2, 2, 5));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//R: 22

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function threeArgs(x, y, z){
    if(x !== undefined && y === undefined && z === undefined ){
        return x;
    } else if(x !== undefined && y !== undefined && z === undefined){
        return x + y;
    } else if(x !== undefined && y !== undefined && z !== undefined){
        return (x + y) / z;
    } else if (x === undefined && y === undefined & z === undefined){
        return false;
    } else {
        return null;
    }
}



// Invoque a função acima utilizando todas as possibilidades 
//(com nenhum argumento, com um, com dois e com três.)
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

//Nenhum argumento
console.log(threeArgs());
console.log(threeArgs(1)); 
console.log(threeArgs(1, 2));
console.log(threeArgs(1, 2, 3));