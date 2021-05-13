const readline = require('readline'); //o require serve pra importar o modulo 
const Produto = require('./Produto');

const leitor = readline.createInterface({    //na interface ele espera um objeto como parâmetro, entao {}
    input: process.stdin, //entrada padrao do sistema, no caso nosso teclado,                sintaxe do objeto - nome da propriedade(input), " : ", e o valor (process.stdin)
    output: process.stdout
});

const produtosMercado = [
    new Produto ("feijão", 5), 
    new Produto ("arroz", 10.50),
    new Produto ("melancia", 2), 
    new Produto ("suco", 10), 
    new Produto ("alface", 3)
];

const validarLista = (listaMercado) => {                 
    if(!listaMercado) {     // o unario !, ja vai verificar se a lista é uma string vazia , se ela é false, null ou undefined...
        throw Error("A lista não pode ser vazia!");      //se for uma das condiçoes a cima vamos forçar esse erro, trow=lançar
    }

    const itensDesejados = listaMercado.split(",");                     //metodo split é um metodo da string, a gente define um separador, ele vai colocando num indice do array
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;                //trim tira todos os espaços  !pra verificar se é uma string vazia, null, undefined  

    if (itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();     //trim tira os espaços, e toLowerCase transforma toda string em letra minuscula 
        const produto = produtosMercado.find(produtoMercado => produtoMercado.nome === itemFormatado);   //o find ele busca por somente uma correspondencia, a primeira q ele achar 
        
        if (produto) {
            produtosDisponiveis.push(produto);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {     //retorna um objeto com essas 2 propriedades: produtosDisponiveis e produtosIndisponiveis 
        produtosDisponiveis,
        produtosIndisponiveis                   
    }
}

leitor
    .question(                      
        "Digite a lista de produtos separado por vírgula:\n",
        (listaProdutos) => {                  //como nessa funçao só tem 1 argumento o parenteses passa ser opcional 
            try {
                const listaValida = validarLista(listaProdutos);    
                const disponibilidade = obterDisponibilidade(listaValida);
                
                console.log('Os seguintes produtos estão disponíveis', disponibilidade.produtosDisponiveis);
                console.log('Os seguintes produtos estão indisponíveis', disponibilidade.produtosIndisponiveis);

                const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.nome.localeCompare(produto2.nome));

                console.log('Produtos disponíveis ordenados alfabeticamente', disponiveisOrdenados);
            } catch (e) {
                console.log(`Erro ao processar lista (${e.message})`);     //essa propriedade message vai receber a string q definimos no throw error
            } finally {
                leitor.close();
            }
                                            
        }
        
    );

