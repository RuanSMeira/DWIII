// Importação dos Modulos:
const http = require('http'); // Mod usado para o uso do protolo http
const { text } = require('stream/consumers');
const url = require('url'); // Mod usado para tratar URL (caminhos)


// Configuração do Projeto(temporario):
const PORT = 4800;

// Criação do Servidor:
const server = http.createServer((req, res) => {
    // Utilizando o modulo URL(criando os end points)
    const reqURL = url.parse(req.url, true);
    const path = reqURL.pathname;
    const query = reqURL.query;

    // Comparação e criação dos end points
    if(path === '/'){
        res.writeHead(200, {'Content-Type' : 'text/plain; charset = utf-8'});
        res.end("Pagina Principal do Projeto");
    }else if(path === '/imc'){
        //Receber as variaveis digitadas na URL
        var valorPeso = parseFloat(query.peso);
        var valorAltura = parseFloat(query.altura);

        // Processar as informações:
        if(isNaN(valorAltura) || isNaN(valorPeso)){
            res.writeHead(400, {'content-type' : 'text/plain; charset = utf-8'});
            res.end("400 - entrada inválida");
        }else{
            // Calculo do IMC:
            var valorIMC = valorPeso / (valorAltura * valorAltura);
            var classific = 'Não Classificado';

            // Classificação do IMC:
            if (valorIMC < 18.5) {
                classific = "Baixo Peso";
            } else if (valorIMC < 24.9) {
                classific = "Peso Normal";
            } else if (valorIMC < 29.9) {
                classific = "Sobrepeso";
            } else if (valorIMC < 34.9) {
                classific = "Obesidade grau 1";
            } else if (valorIMC <  39.9){
                classific = "Obesidade grau 2";
            } else{
                classific = "Obesidade extrema";
            }

            // Mostrar os resultados:
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
            res.end(`<h1>IMC: ${valorIMC.toFixed(2)} - Peso: ${valorPeso.toFixed(2)} - Altura: ${valorAltura.toFixed(2)}</h1>
            <p>Classificação: <span>${classific}</span></p>`);
        }
    }else if (path === '/notas') {
         //Receber as variaveis digitadas na URL
         var notaP1 = parseFloat(query.notaP1);
         var notaP2 = parseFloat(query.notaP2);

         // Processar as informações:
         if(isNaN(notaP1) || isNaN(notaP2) || notaP1 < 0 || notaP2 < 0 || notaP1 > 10 || notaP2 > 10){
            res.writeHead(400, {'content-type' : 'text/plain; charset=utf-8'});
            res.end("400 - entrada inválida");
         }else{
            var media = (notaP1 + notaP2)/2;
            var situacao = 'indisponível';
            if (media < 6 ) {
                situacao = 'Reprovado.';
            }else{
                situacao = 'Aprovado !!'
            }
            res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
            res.end(`<h1>Nota da P1: ${notaP1.toFixed(2)} - Nota da P2: ${notaP2.toFixed(2)} - Média: ${media.toFixed(2)}</h1>
               <p>Situação: <span>${situacao}</span></p>`)
         }


    }else if (path === '/dolar') {
       //Receber as variaveis digitadas na URL
       var valorReais = parseFloat(query.reais);
       var valorDolar = parseFloat(query.dolar);

        // Processar as informações:
        if(isNaN(valorReais) || isNaN(valorDolar) || valorReais < 0 || valorDolar < 0){
            res.writeHead(400, {'content-type' : 'text/plain; charset=utf-8'});
            res.end("400 - entrada inválida");
        }else{
            var dolarPossivel = valorReais / valorDolar;

            res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
            res.end(`<h1>Valor em reais: R$ ${valorReais.toFixed(2)} - Valor em dólar: $ ${valorDolar.toFixed(2)}</h1>
               <p>Dólares que podem ser comprados com a quantidade de reais: <span>$ ${dolarPossivel.toFixed(2)}</span></p>`)
        }

    }else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h1>404 - Página não encontrada</h1>");
    }
});


// Configuração do Servidor:
server.listen(PORT, () => {
    console.log(`[CONECTADO] - Servidor iniciado em porta: ${PORT}`);
});