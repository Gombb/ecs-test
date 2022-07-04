const express = require('express');
const app = express();
const port = 80;


app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/health-check', function(req, res){
    res.status(200).send('OK');
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})