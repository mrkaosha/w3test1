const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  var url = req.url;
  if(url ==='/') {
    fs.createReadStream('index.html').pipe(res)
  } else if(url ==='/favorites')  {
    fs.createReadStream('favorites.html').pipe(res)
  } else {
    res.write('Doesn\'t exist'); 
    res.end(); 
  }
  console.log("connected") 
})

server.listen(process.env.PORT || 80)