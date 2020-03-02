const http= require('http');

const { Form } = require('brazil-mocker');

let nome = Form.names.fullName.generate();

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html;charset=utf=8'});
    res.end('Oi, '+ nome);
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço precione Ctrol+C');