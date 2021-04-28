const readline = require('readline');   //o readline em verde poderia ser qualquer nome, por convençao sempre usa o nome do modulo q estamos importando  

const leitor = readline.createInterface({
    input: process.stdin,    //stdin entrada padrao: no caso nosso teclado 
    output: process.stdout   //stdout q no nosso caso é o proprio terminal 
});

const primeiraPergunta = 'Digite o primeiro número:\n';
const segundaPergunta = 'Digite o segundo número:\n';
const terceiraPergunta = 'Digite a operacao:\n';

const realizarCalculo = (num1, num2, operacao) => {
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2)

    switch (operacao) {
        case '+':
            return primeiroNumero + segundoNumero;
        case '-':
            return primeiroNumero - segundoNumero;
        case '*':
            return primeiroNumero * segundoNumero;
        case '/':
            return primeiroNumero / segundoNumero;
        default:
            return 0;
    }
}

leitor.question(primeiraPergunta, (primeiroNumero) => {
    leitor.question(segundaPergunta, (segundoNumero) => {
        leitor.question(terceiraPergunta, (operacao) => {
            const resultado = realizarCalculo(
                primeiroNumero,
                segundoNumero,
                operacao
            );

            console.log({ resultado });

            leitor.close();
        });
    });
});