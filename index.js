const http = require("http");
const fs = require("fs");
const readline = require("minimist");

const args = require("minimist")(process.argv.slice(2));
let port = args.port;

let projectContent = "";
let homeContent = "";
let registrationContent = "";
let style = "";
let script = "";

fs.readFile("./home.html", (err, data) => {
  if (err) {
    throw err;
  }
  homeContent = data;
});

fs.readFile("./main.css", (err, data) => {
  if (err) {
    throw err;
  }
  style = data;
});

fs.readFile("./myjs.js", (err, data) => {
  if (err) {
    throw err;
  }
  script = data;
});

console.log(script);

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

  // if - else part
  // if (url === "/") {
  //   res.write(homeContent);
  //   res.end();
  // } else if (url === "/project") {
  //   res.write(projectContent);
  //   res.end();
  // } else if (url === "/registration") {
  //   res.write(registrationContent);
  //   res.end();
  // } else if ("/myjs.js") {
  //   res.writeHeader(200, { "Content-Type": "text/javascript" });
  //   res.write(script);
  //   res.end();
  // } else if ("/main.css") {
  //   res.writeHeader(200, { "Content-Type": "text/css" });
  //   res.write(style);
  //   res.end();
  // } else {
  //   res.write(homeContent);
  //   res.end();
  // }

  // switch case part
  switch (url) {
    case "/":
      res.write(homeContent);
      res.end();
      break;
    case "/project":
      res.write(projectContent);
      res.end();
      break;
    case "/registration":
      res.write(registrationContent);
      res.end();
      break;
    case "/main.css":
      res.writeHeader(200, { "Content-Type": "text/css" });
      res.write(style);
      res.end();
      break;
    case "/myjs.js":
      res.writeHeader(200, { "Content-Type": "text/javascript" });
      res.write(script);
      res.end();
      break;
    default:
      res.write(homeContent);
      res.end();
      break;
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`litening at port ${port}`);
});
