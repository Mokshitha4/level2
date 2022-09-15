const http = require("http");
const fs = require("fs");
const readline = require("minimist");

const args = require("minimist")(process.argv.slice(2));
let port = args.port;

let projectContent = "";
let homeContent = "";
let registrationContent = "";

fs.readFile("./home.html", (err, data) => {
  if (err) {
    throw err;
  }
  homeContent = data;
});

fs.readFile("./registration.html", (err, data) => {
  if (err) {
    throw err;
  }
  registrationContent = data;
});

fs.readFile("./project.html", (err, data) => {
  if (err) {
    throw err;
  }
  projectContent = data;
});

const server = http.createServer((req, res) => {
  let url = req.url;
  res.writeHeader(200, { "Content-type": "text/html" });

  if (url === "/project") {
    res.write(projectContent);
    res.end();
  } else if (url === "/registration") {
    res.write(registrationContent);
    res.end();
  } else {
    res.write(homeContent);
    res.end();
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`litening at port ${port}`);
});
