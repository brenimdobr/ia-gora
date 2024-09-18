const nomes = ["Renan", "Jóshua", "Ezequiel", "Tobias", "Luz", "Aurora", "Melissa"]


export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)