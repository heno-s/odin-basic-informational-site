const http = require("http");
const fs = require("fs/promises");

const hostname = "127.0.0.1";

const port = 8080;

const server = http.createServer(async (req, res) => {
    const path = req.url;
    console.log(path);

    if (path === "/" || path === "/index" || path === "/index.html") {
        console.log(__dirname);
        const indexFile = await fs.readFile(
            __dirname + "/index.html"
        );

        res.end(indexFile);
    } else if (path === "/about" || path === "/about.html") {
        const aboutPage = await fs.readFile(
            __dirname + "/about.html"
        );
        res.end(aboutPage);
    } else if (
        path === "/contact-me" ||
        path === "/contact" ||
        path === "/contact-me.html" ||
        path === "/contact.html"
    ) {
        const contactPage = await fs.readFile(
            __dirname + "/contact-me.html"
        );
        res.end(contactPage);
    } else {
        const notFoundPage = await fs.readFile(
            __dirname + "/404.html"
        );
        res.end(notFoundPage);
    }
});

server.listen(port, hostname, () => {
    console.log("Server listens on port: " + port);
});
