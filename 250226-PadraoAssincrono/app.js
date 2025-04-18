// Importação da Lib no projeto
import chalk from "chalk";
import fs from "fs";

//Teste do Chalk no projeto:
const pegaArquivo = (caminhoArquivo) =>{
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (_, txt) =>{
        console.log(chalk.greenBright(txt))
    })
}
pegaArquivo('./arquivos/texto.md')

// Definição de uma Var com um conteudo String
const paragrafo = "Texto retornado por uma função"

//Função de nome Texto que recebe a Var e retornar a mesma
function texto(string) {
    return string
}

console.log(texto(paragrafo))