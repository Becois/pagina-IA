function simularDescarte() {
    const tipoLixo = document.getElementById('tipoLixo').value;
    const resultadoDiv = document.getElementById('resultado-simulador');
    let mensagem = "";

    switch (tipoLixo) {
        case "plastico":
            mensagem = "Plástico: Descarte em lixeiras de coleta seletiva (cor vermelha) ou em pontos de coleta específicos para reciclagem. Não jogue no lixo comum, muito menos em rios!";
            break;
        case "papel":
            mensagem = "Papel: Descarte em lixeiras de coleta seletiva (cor azul). Evite papel sujo de comida ou gordura, que deve ir para o lixo comum.";
            break;
        case "vidro":
            mensagem = "Vidro: Descarte em lixeiras de coleta seletiva (cor verde). Tenha cuidado com cacos e embale-os para evitar acidentes.";
            break;
        case "metal":
            mensagem = "Metal: Descarte em lixeiras de coleta seletiva (cor amarela). Latas de alumínio são 100% recicláveis!";
            break;
        case "organico":
            mensagem = "Orgânico: Descarte em lixeiras comuns. Se possível, considere a compostagem doméstica para transformar em adubo!";
            break;
        case "eletronico":
            mensagem = "Eletrônico: Descarte em pontos de coleta específicos para lixo eletrônico (e-lixo). Nunca jogue no lixo comum!";
            break;
        case "pilhas":
            mensagem = "Pilhas e Baterias: Descarte em coletores específicos encontrados em supermercados, agências bancárias ou lojas de eletrônicos. Contêm substâncias tóxicas!";
            break;
        case "medicamento":
            mensagem = "Medicamentos Vencidos: Descarte em farmácias ou unidades de saúde que possuam pontos de coleta específicos. Não jogue no lixo comum ou no vaso sanitário!";
            break;
        default:
            mensagem = "Por favor, selecione um tipo de lixo.";
    }
    resultadoDiv.innerHTML = mensagem;
}