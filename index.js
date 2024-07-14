const http = require("http");
const fs = require("fs");
const filecontent = fs.readFileSync("index.html");

const path = "../../Downloads/";
fs.readdir(path, (err, files) => {
  files.forEach((file) => {
    const [fileName, ext] = file.split(".");
    if (ext && !fs.existsSync(path + ext)) {
      fs.mkdirSync(path + ext, { recursive: true });
      fs.rename(path + file, path + ext + "/" + file, (err) => {
        if (err) throw err;
        console.log(`Successfully moved ${file} to ${path + ext}`);
      });
    } else if (ext && fs.existsSync(path + ext)) {
      fs.rename(path + file, path + ext + "/" + file, (err) => {
        if (err) throw err;
        console.log(`Successfully moved ${file} to ${path + ext}`);
      });
    } else {
      console.log(path + file, " is folder");
    }
  });
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.end(filecontent);
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("listening port 3000");
// });
