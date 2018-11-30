var http = require("http");
var express = require("express");
var app = express();
var options = {
  "protocol":"http:",
  "method": "POST",
  "hostname":"172.31.0.9",
  "port":81,
  "path":"/right/user/query",
  "headers": {
    "Content-Type": "application/json"
  }
};
var result = null;
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    result = body.toString();
  });
});

req.write(JSON.stringify({ id: 'b576e5e66910432b8a2984cf825fae2f' }));
req.end();


app.get("/api",(req,res)=>{
  res.json({
    result
  })
});

app.listen(8080)