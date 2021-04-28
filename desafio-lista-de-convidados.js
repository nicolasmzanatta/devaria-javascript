const listaPessoas = ["Douglas", "Rafael", "Daniel"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaPessoas.includes(nome)) {
    console.log("você não foi convidado!");
    return;
}

if (idade < 18) {
    console.log("apenas maiores de idade podem entrar na festa!");
    return;
}

console.log("seja bem vindo!");