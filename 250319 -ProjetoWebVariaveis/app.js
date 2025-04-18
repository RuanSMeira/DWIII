// Imporatação dos Modulos:
const http = require('http'); // Mod usado para o uso do protocolo http
const path = require('path');
const url = require('url'); // Mod usado para tratar URL (caminhos)

// Configuraçâo do Projeto(temporario):
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

            // Classificação do IMC:

            // Mostrar os resultados:
            res.writeHead(200, {'content-type' : 'text/plain; charset = utf-8'});
            res.end(`IMC: ${valorIMC.toFixed(2)} - Peso: ${valorPeso.toFixed(2)} - Altura: ${valorAltura.toFixed(2)}`);
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