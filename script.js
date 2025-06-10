let pontos = 0; // Variável global para a pontuação

function simularDescarte() {
    const tipoLixo = document.getElementById('tipoLixo').value;
    const resultadoDiv = document.getElementById('resultado-simulador');
    const pontosSpan = document.getElementById('pontos');
    let mensagem = "";
    let correto = false; // Flag para verificar se o descarte foi correto

    switch (tipoLixo) {
        case "plastico":
            mensagem = "✅ Plástico: Descarte em lixeiras de coleta seletiva (cor vermelha) ou em pontos de coleta específicos para reciclagem. Não jogue no lixo comum, muito menos em rios!";
            correto = true;
            break;
        case "papel":
            mensagem = "✅ Papel: Descarte em lixeiras de coleta seletiva (cor azul). Evite papel sujo de comida ou gordura, que deve ir para o lixo comum.";
            correto = true;
            break;
        case "vidro":
            mensagem = "✅ Vidro: Descarte em lixeiras de coleta seletiva (cor verde). Tenha cuidado com cacos e embale-os para evitar acidentes.";
            correto = true;
            break;
        case "metal":
            mensagem = "✅ Metal: Descarte em lixeiras de coleta seletiva (cor amarela). Latas de alumínio são 100% recicláveis!";
            correto = true;
            break;
        case "organico":
            mensagem = "✅ Orgânico: Descarte em lixeiras comuns. Se possível, considere a compostagem doméstica para transformar em adubo!";
            correto = true; // Consideramos o descarte em lixeira comum como correto para fins do simulador
            break;
        case "eletronico":
            mensagem = "✅ Eletrônico: Descarte em pontos de coleta específicos para lixo eletrônico (e-lixo). Nunca jogue no lixo comum!";
            correto = true;
            break;
        case "pilhas":
            mensagem = "✅ Pilhas e Baterias: Descarte em coletores específicos encontrados em supermercados, agências bancárias ou lojas de eletrônicos. Contêm substâncias tóxicas!";
            correto = true;
            break;
        case "medicamento":
            mensagem = "✅ Medicamentos Vencidos: Descarte em farmácias ou unidades de saúde que possuam pontos de coleta específicos. Não jogue no lixo comum ou no vaso sanitário!";
            correto = true;
            break;
        default:
            mensagem = "❓ Por favor, selecione um tipo de lixo para simular o descarte.";
            correto = false; // Não há descarte a ser pontuado se nada for selecionado
    }

    if (correto) {
        pontos += 10; // Adiciona 10 pontos por descarte correto
        resultadoDiv.style.color = '#27ae60'; // Verde para acerto
    } else {
        resultadoDiv.style.color = '#e74c3c'; // Vermelho para erro/aviso
    }

    resultadoDiv.innerHTML = mensagem;
    pontosSpan.textContent = pontos; // Atualiza a exibição da pontuação
}

function mostrarDicaLocal() {
    const regiao = document.getElementById('regiao').value;
    const dicaDiv = document.getElementById('dica-local');
    let dica = "";

    switch (regiao) {
        case "sudeste":
            dica = "No Sudeste, muitas cidades têm programas de coleta seletiva porta a porta ou ecopontos. Consulte a prefeitura da sua cidade para o cronograma e locais.";
            break;
        case "sul":
            dica = "Na região Sul, a compostagem doméstica e pontos de entrega voluntária (PEVs) para recicláveis são comuns. Verifique as cooperativas de reciclagem locais.";
            break;
        case "nordeste":
            dica = "O Nordeste tem investido em centrais de triagem. Priorize separar o lixo seco do orgânico e procure pontos de entrega voluntária em shoppings ou supermercados.";
            break;
        case "centro-oeste":
            dica = "No Centro-Oeste, a reciclagem pode ser facilitada por iniciativas de associações de catadores. Informe-se sobre os dias de coleta seletiva no seu bairro.";
            break;
        case "norte":
            dica = "A região Norte, com sua biodiversidade, depende ainda mais do descarte correto. Verifique se há cooperativas de reciclagem ou ONGs que recebam recicláveis na sua comunidade.";
            break;
        default:
            dica = "Selecione uma região para ver uma dica de reciclagem.";
    }
    dicaDiv.innerHTML = dica;
}

// Opcional: Você pode adicionar um evento para carregar a dica inicial quando a página carregar
// window.onload = mostrarDicaLocal;