// Matriz de objetos contendo o nome e as notas de cada atleta
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

/**
 * Função que calcula a média válida de um atleta,
 * desconsiderando a maior e a menor nota.
 * Recebe um array de notas e retorna a média das três notas do meio.
 */
function calcularMedia(notas) {
  // Ordena as notas em ordem crescente
  let notasOrdenadas = notas.slice().sort(function (a, b) {
    return a - b;
  });

  // Elimina a menor nota (primeira) e a maior nota (última),
  // mantendo apenas as três notas do meio
  let notasComputadas = notasOrdenadas.slice(1, 4);

  // Calcula a soma das notas computadas
  let soma = 0;
  notasComputadas.forEach(function (nota) {
    soma += nota;
  });

  // Calcula e retorna a média dividindo a soma pelo total de notas computadas
  let media = soma / notasComputadas.length;
  return media;
}

/**
 * Função que percorre a lista de atletas,
 * exibe o nome, as notas obtidas e a média válida de cada um.
 * Recebe uma matriz de objetos com as propriedades "nome" e "notas".
 */
function exibirResultados(objAtletas) {
  // Percorre todos os atletas da matriz
  for (let i = 0; i < objAtletas.length; i++) {
    // Obtém o nome do atleta atual
    let nome = objAtletas[i].nome;

    // Obtém as notas do atleta atual
    let notas = objAtletas[i].notas;

    // Calcula a média válida utilizando a função calcularMedia
    let media = calcularMedia(notas);

    // Exibe o nome do atleta
    console.log("Atleta: " + nome);

    // Exibe as notas obtidas separadas por vírgula
    console.log("Notas Obtidas: " + notas.join(","));

    // Exibe a média válida calculada
    console.log("Média Válida: " + media);

    // Exibe uma linha em branco para separar os atletas
    console.log("");
  }
}

// Chama a função principal passando a matriz de atletas
exibirResultados(atletas);
