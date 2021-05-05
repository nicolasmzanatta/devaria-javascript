const novosAlunos = ["Douglas", "Daniel", "João"];

const darBoasVindas = (nomeAluno) => {
    console.log(`Seja bem vindo ${nomeAluno}`);
} 

for (const aluno of novosAlunos) {
    darBoasVindas(aluno);
}