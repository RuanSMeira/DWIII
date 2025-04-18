// Carrega o modulo HTTP:
const http = require('http');
const  url  = require('url');
var fs = require('fs');

// Função para ler um Arquivo e Escrreve-lo na Response:
function readFile(response, file){
    // Faz a leitura do arquivo de forma assincrona
    fs.readFile(file, function(err, data){
        if (err){
            response.writeHead(500, {"Content-Type": "text/plain"});
            return response.end("Erro ao ler arquivo")
        }
        response.end(data);
    });
}

//Criar um servidor HTTP no qual envia uma msg:
var callback = function(request, response){
    //Define o cabeçalho (header) com o tipo de resposta:
    

    // Faz um Parse da URL separando o caminho (rotas/end-point):
    var parts = url.parse(request.url);

    //Verifica a rota:
    switch (parts.pathname) {
        case "/":
            response.writeHead(200,{"Content-Type" : "text/html"});
            readFile(response, "index.html")  
            break;
        case "/rota1":
            response.writeHead(200, {"Content-Type" : "text/html"})
            readFile(response,"saibamais.html")
            break;
        case "/rota3":
            response.writeHead(200, {"Content-Type" : "application/pptx"})
            readFile(response, "apresentacao.pptx")
            break;

        case "/rota4":
            response.writeHead(200, {"Content-Type" : "application/json"})
            readFile(response, "dados.json")
            break;
        case "/rota5":
            response.writeHead(200, {"Content-Type" : "application/pdf"})
            readFile(response, "livro.pdf")
            break;
        default:
            response.writeHead(404, "rota inválida")
            break;
    }
}



// Porta que o servidor vai utilizar:
var server = http.createServer(callback);
server.listen(4500);

//Mensagem ao iniciar o servidor 
console.log("Servidor iniciado em http://localhost:4500/")