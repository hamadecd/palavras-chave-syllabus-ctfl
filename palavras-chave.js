const fs = require('fs');

function lerArquivo(caminhoArquivo) {
  try {
    // Lê o conteúdo do arquivo de texto
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');

    // Divide as palavras pelo caractere de vírgula e remove espaços extras
    const palavras = conteudo.split(',').map(palavra => palavra.trim());

    return palavras;
  } catch (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return [];
  }
}

let todasAsPalavras = [];
const palavrasUnicas = new Set();

for (let index = 1; index <= 6; index++) {
  const capitulo = './capitulos/capitulo-' + index + '.txt';
  const arrayPalavras = lerArquivo(capitulo);

  console.log(`No capítulo ${index} do Syllabus, existe ${arrayPalavras.length} palavras-chave.`);
  // Adiciona palavras únicas ao conjunto
  arrayPalavras.forEach(palavra => palavrasUnicas.add(palavra));

  todasAsPalavras = todasAsPalavras.concat(arrayPalavras);
}

// Converte o conjunto de volta para um array
const palavrasUnicasArray = Array.from(palavrasUnicas);

// Exibe resultado com palavras repetidas
console.log('Palavras com repetições:', todasAsPalavras.length);

// Exibe resultado sem palavras repetidas
console.log('Palavras sem repetições:', palavrasUnicasArray.length);
