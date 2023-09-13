const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');
const other_page = fs.readFileSync('./other.ejs', 'utf-8');
// const css_page = fs.readFileSync('./style.css','utf-8');
const server = http.createServer(getFromClient);

server.listen(3000);
console.log('Start Server');

// ここまでがメインプログラム

function getFromClient(request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {

        case '/':
            var content = ejs.render(index_page, {
                title: "Index",
                content: "これはIndexページです。",
            });
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(content);
            response.end();
            break;

        case '/other':
            var content = ejs.render(other_page, {
                title: "Other",
                content: "これは新しく追加したページです。",
            });
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(content);
            response.end();
            break;



        default:
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('no page...');
            break;
    }
}