let atividadesPendentes;
let atividadesRealizadas = 0;

const consultarAtividadesDodia = () => {
    if (atividadesRealizadas === 3) {
        return [];
    }
    return [
        "Atividade 1",
        "Atividade 2",
        "Atividade 3"      
    ];
}

const informarAtividades = (atividades) => {
    if (atividades.length === 0) {
        console.log('Você não tem mais atividades pendentes!');
        return;
    }
    console.log(`Atividades pendentes ${atividades}`);
}

do {
    atividadesPendentes = consultarAtividadesDodia();
    informarAtividades(atividadesPendentes);
    atividadesRealizadas++;
} while (atividadesPendentes.length > 0);

