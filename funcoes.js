function numeroAleatorio() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

const olaMundo = () => {           //criando uma arrow function 
    console.log("ola mundo");
}

olaMundo();    //aq usou a funçao q acabou de criar 
 
function soma(numero1, numero2) {    //criando uma funçao de soma) 
    return numero1 + numero2;
}

const primeiraSoma = soma(1, 3);      //usando a funçao de soma
const segundaSoma = soma(6, 7);

console.log({            //um outro jeito de exibiçao, ele vai imprimir no console o valor e o nome das variáveis  
    primeiraSoma,
    segundaSoma
});

console.log(primeiraSoma, segundaSoma);