/**
 * Classe que representa um Atleta e suas estatísticas.
 * Contém informações pessoais e métodos para calcular métricas de desempenho.
 */
class Atleta {
    /**
     * Construtor da classe Atleta.
     * @param {string} nome - Nome do atleta.
     * @param {number} idade - Idade do atleta em anos.
     * @param {number} peso - Peso do atleta em kg.
     * @param {number} altura - Altura do atleta em metros.
     * @param {number[]} notas - Array com as notas dos jurados.
     */
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    /**
     * Calcula a categoria do atleta com base na idade.
     * @returns {string} Categoria do atleta.
     */
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    /**
     * Calcula o Índice de Massa Corporal (IMC).
     * @returns {number} Valor do IMC.
     */
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    /**
     * Calcula a média das notas desconsiderando a maior e a menor.
     * @returns {number} Média válida.
     */
    calculaMediaValida() {
        // Ordena as notas em ordem crescente
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);

        // Seleciona as três notas do meio (posições 1, 2 e 3)
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // Soma as notas
        let soma = 0;
        notasComputadas.forEach((nota) => {
            soma += nota;
        });

        // Calcula a média
        return soma / notasComputadas.length;
    }

    /**
     * Retorna o nome do atleta.
     * @returns {string}
     */
    obtemNomeAtleta() {
        return this.nome;
    }

    /**
     * Retorna a idade do atleta.
     * @returns {number}
     */
    obtemIdadeAtleta() {
        return this.idade;
    }

    /**
     * Retorna o peso do atleta.
     * @returns {number}
     */
    obtemPesoAtleta() {
        return this.peso;
    }

    /**
     * Retorna as notas do atleta.
     * @returns {number[]}
     */
    obtemNotasAtleta() {
        return this.notas;
    }

    /**
     * Retorna a categoria calculada.
     * @returns {string}
     */
    obtemCategoria() {
        return this.calculaCategoria();
    }

    /**
     * Retorna o IMC calculado.
     * @returns {number}
     */
    obtemIMC() {
        return this.calculaIMC();
    }

    /**
     * Retorna a média válida calculada.
     * @returns {number}
     */
    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// Exemplo de uso conforme especificações:
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
