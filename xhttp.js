const http = require('http');
require('./src/config/html.js');

const server = http.createServer((req, resp) => {
   if(req.url == '/livros'){
       resp.end(html('Livros'));
   }else{
       resp.end(html('Home'));
   }
}); 

server.listen(3000);

