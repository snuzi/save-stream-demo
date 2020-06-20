var express = require('express')
const fs = require('fs')

var app = express()

app.listen(8088);

// Access HTML demo http://localhost/public/
app.use('/public', express.static('site'));

// Stream a large size file
app.all('/large-file', function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
        'Content-Disposition': 'attachment; filename="large-file.zip"'
    })

    const readStream = fs.createReadStream('./large.zip');
    readStream.pipe(res);
});


app.get('/text', (req, res) => {
    const sentence = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
        'Content-Disposition': 'attachment; filename="file-dowlnoad.txt"'
    })

   const i = 0;

   const regId = setInterval(() => {
       res.write(sentence[i++] + "\n");
       if(i >= sentence.length) {
           clearInterval(regId);
           return;
       }
   }, 500);

   setTimeout(() => {
    res.end();
   }, sentence.length * 1000);

});


console.log('Server started at port 8088');