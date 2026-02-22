Pontuação dos Atletas - DevStart 

Aplicação em JavaScript puro que recebe o nome e as notas de atletas de ginástica artística, calcula a média válida e apresenta os resultados ao usuário.

Sobre o Projeto

Em uma competição de ginástica artística, cada atleta é avaliado por uma banca de cinco jurados, onde cada um avalia um critério específico: Tempo de duração da apresentação, Originalidade da coreografia, Postura do Atleta, Dificuldade das acrobacias, Sincronismo.


Regras de Avaliação impostas pela Plataforma DevStart

Cada jurado pode fornecer uma nota de 1 a 10.
A média é calculada com base nas três notas do meio, desconsiderando a maior e a menor nota.

Como Executar

Pré-requisitos
[Node.js](https://nodejs.org/) instalado na sua máquina (qualquer versão recente).

Passo a passo

1. Clone o repositório:

bash
git clone https://github.com/itamarprincipios/ItamarNunes-notas-atletas.git


2. Acesse a pasta do projeto

bash
cd ItamarNunes-notas-atletas


3. Execute o arquivo:
bash
node notas-atletas.js
   



Ao executar o programa, a seguinte saída será exibida no console:


Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida: 9.253333333333332

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.833333333333334


Lógica Utilizada

O programa segue os seguintes passos:

1. Recebe uma matriz de objetos contendo o nome e as cinco notas de cada atleta.
2. Ordena as notas em ordem crescente usando `.sort()`.
3. Remove a menor nota (primeira posição) e a maior nota (última posição) usando `.slice(1, 4)`.
4. Soma as três notas restantes utilizando `.forEach()`.
5. Calcula a média dividindo a soma pelo número de notas computadas (`.length`).
6. Exibe o resultado no console com `console.log()`.

Estrutura do Projeto

ItamarNunes-notas-atletas/
├── notas-atletas.js   # Arquivo principal com a lógica do programa
└── README.md          # Documentação do projeto

