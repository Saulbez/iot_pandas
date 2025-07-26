export function ObterGeneroAleatorio() {
    return Math.random() < 0.5 ? "M" : "F";
}
export function ObterRendaFamiliarPonderada() {
    const pesos = [0.5, 0.3, 0.1, 0.07, 0.03];
    const faixas = [1, 2, 3, 4, 5];
    const random = Math.random();
    let acumulado = 0;
    for (let i = 0; i < pesos.length; i++) {
        acumulado += pesos[i];
        if (random <= acumulado) {
            return faixas[i].toString();
        }
    }
    return faixas[faixas.length - 1].toString();
}
export function ObterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function ObterBooleanoAleatorio() {
    return Math.random() < 0.5 ? "1" : "0";
}
export function ObterIdadePonderada() {
    const pesos = [0.05, 0.1, 0.4, 0.25, 0.15, 0.085];
    const faixas = [
        { min: 16, max: 20 }, // Jovens (16-20)
        { min: 21, max: 30 }, // Jovens adultos (21-30)
        { min: 31, max: 45 }, // Adultos (31-45)
        { min: 46, max: 60 }, // Meia-idade (46-60)
        { min: 61, max: 65 }, // Idosos jovens (61-65)
        { min: 66, max: 80 }, // Idosos (66-80)
    ];
    const random = Math.random();
    let acumulado = 0;
    for (let i = 0; i < pesos.length; i++) {
        acumulado += pesos[i];
        if (random <= acumulado) {
            return ObterNumeroAleatorio(faixas[i].min, faixas[i].max);
        }
    }
    const ultimaFaixa = faixas[faixas.length - 1];
    return ObterNumeroAleatorio(ultimaFaixa.min, ultimaFaixa.max);
}
export function ObterImcPonderado(rendaFamiliar) {
    // Tipagem ajustada para aceitar índices string
    const pesosPorRenda = {
        "1": [0.1, 0.3, 0.6],
        "2": [0.2, 0.4, 0.4],
        "3": [0.3, 0.4, 0.3],
        "4": [0.4, 0.4, 0.2],
        "5": [0.6, 0.3, 0.1],
    };
    // Se não houver peso definido, padrão igualitário
    const pesos = pesosPorRenda[rendaFamiliar] ?? [0.33, 0.33, 0.34];
    const imcValores = [1, 2, 3];
    const random = Math.random();
    let acumulado = 0;
    for (let i = 0; i < pesos.length; i++) {
        acumulado += pesos[i];
        if (random <= acumulado) {
            return imcValores[i];
        }
    }
    return imcValores[imcValores.length - 1];
}
export function ObterColelitíase(genero) {
    const probabilidadeMulher = 0.2; // 20% para mulheres
    const probabilidadeHomem = ObterNumeroAleatorio(8, 10) / 100; // 8% a 10% para homens
    if (genero === "F") {
        return Math.random() < probabilidadeMulher ? "1" : "0";
    }
    else if (genero === "M") {
        return Math.random() < probabilidadeHomem ? "1" : "0";
    }
    return "0";
}
export function ObterDisfuncaoEretil(genero, idade) {
    if (genero !== "M") {
        return "0"; // só ocorre em homens
    }
    let probabilidade = 0;
    if (idade < 40) {
        probabilidade = 0.05;
    }
    else if (idade < 50) {
        probabilidade = 0.15;
    }
    else if (idade < 60) {
        probabilidade = 0.25;
    }
    else if (idade < 70) {
        probabilidade = 0.4;
    }
    else {
        probabilidade = 0.6;
    }
    return Math.random() < probabilidade ? "1" : "0";
}
export function ObterSindromeDoOvarioPolicistico(genero, idade) {
    if (genero !== "F") {
        return "0"; // só ocorre em mulheres
    }
    if (idade < 15 || idade > 49) {
        return "0";
    }
    const probabilidade = ObterNumeroAleatorio(5, 10) / 100;
    return Math.random() < probabilidade ? "1" : "0";
}
export function ObterVarizes(genero, idade) {
    let probabilidade = 0;
    if (genero === "F") {
        probabilidade = 0.45;
    }
    else if (genero === "M") {
        probabilidade = 0.3;
    }
    else {
        return "0";
    }
    if (idade >= 70) {
        probabilidade += 0.25;
    }
    else if (idade >= 50) {
        probabilidade += 0.1;
    }
    else if (idade >= 30) {
        probabilidade += 0.05;
    }
    return Math.random() < probabilidade ? "1" : "0";
}
export function ObterHipertensaoIntracranianaIdiopatica(genero, idade, imc) {
    let probabilidadeBase = 0;
    if (genero === "F") {
        probabilidadeBase = 0.00003;
    }
    else if (genero === "M") {
        probabilidadeBase = 0.00001;
    }
    else {
        return "0";
    }
    if (genero === "F" && idade >= 15 && idade <= 49) {
        probabilidadeBase *= 10;
    }
    if (imc === 3) {
        probabilidadeBase *= 5;
    }
    else if (imc === 2) {
        probabilidadeBase *= 2;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterEsteatoseHepatica() {
    const probabilidade = ObterNumeroAleatorio(20, 30) / 100;
    return Math.random() < probabilidade ? "1" : "0";
}
export function ObterHerniaDeDisco(idade) {
    let probabilidadeBase = ObterNumeroAleatorio(13, 40) / 100;
    if (idade >= 50 && idade <= 60) {
        probabilidadeBase += 0.2;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterDislipidemia(genero, idade) {
    let probabilidadeBase = ObterNumeroAleatorio(43, 60) / 100;
    if (genero === "M") {
        probabilidadeBase += 0.15;
    }
    if (idade >= 50) {
        probabilidadeBase += 0.1;
    }
    else if (idade >= 30) {
        probabilidadeBase += 0.05;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterApneiaDoSono(idade, imc) {
    let probabilidadeBase = ObterNumeroAleatorio(8, 16) / 100;
    if (idade >= 50) {
        probabilidadeBase += 0.1;
    }
    if (imc === 3) {
        probabilidadeBase += 0.15;
    }
    else if (imc === 2) {
        probabilidadeBase += 0.05;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterInfertilidade(idade) {
    if (idade < 15 || idade > 49) {
        return "0";
    }
    const probabilidadeBase = 0.15;
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterAnsiedade(genero) {
    let probabilidadeBase = 0.03;
    if (genero === "F") {
        probabilidadeBase *= 2;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterDiabetesTipo2(imc) {
    let probabilidadeBase = 0.1;
    if (imc === 1) {
        probabilidadeBase = 0.1;
    }
    else if (imc === 2) {
        probabilidadeBase += 0.35;
    }
    else if (imc === 3) {
        probabilidadeBase += 0.75;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
export function ObterOsteoartriteIncapacitante(genero, idade) {
    let probabilidadeBase = 0.1;
    if (genero === "F") {
        probabilidadeBase += 0.2;
    }
    if (idade >= 60) {
        probabilidadeBase += 0.15;
    }
    return Math.random() < probabilidadeBase ? "1" : "0";
}
//# sourceMappingURL=index.js.map