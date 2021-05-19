const precos = [ 'credito', 'R$ 200', 'R$ 400', 'Contas a pagar', 'R$ 300', ];

const precosFiltro = precos.filter(preco => preco.includes('R$'));

console.log(precosFiltro)