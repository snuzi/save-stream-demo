var express = require('express')
<<<<<<< HEAD
const fs = require('fs');
const { response } = require('express');
=======
const fs = require('fs')
>>>>>>> 238e4a89b50bef8f1b9b865a9f8c37d926ccbfa0

var app = express()

app.listen(8088);

// Access HTML demo http://localhost/public/
app.use('/public', express.static('site'));

// Stream a large size file
app.all('/file', function (req, res, next) {
<<<<<<< HEAD
    
    const fileName = 'files/' + (req.query.file || 'large.zip');

    if (!fs.existsSync(fileName)) {
        res.status(404).send(new Error('File not found'));
        return;
    }

=======
>>>>>>> 238e4a89b50bef8f1b9b865a9f8c37d926ccbfa0
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
        'Content-Disposition': 'attachment; filename="large-file.zip"'
    })

<<<<<<< HEAD
    try {
        const readStream = fs.createReadStream(fileName);
        readStream.pipe(res);
    }
    catch(e) {
        response.status(404).send(new Error('File not found'));
    }
=======
    console.log(req.query.file );
    const fileName = req.query.file || 'large.zip';
    const readStream = fs.createReadStream(fileName);
    readStream.pipe(res);
>>>>>>> 238e4a89b50bef8f1b9b865a9f8c37d926ccbfa0
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