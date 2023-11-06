const http = require("http");
// location and port of our server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    // res.end("hello World\n");
    const url = req.url

    if (url == "/") {
        res.write("<p>Welcome to My Home <Page></Page></p>")
    } else if (url ==="/about") {
        res.write("<p>It all about my Foodie App!</p>")
    } else {
        res.statusCode = 404
        res.write("<p>Page not found</p>")
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
