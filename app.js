const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/wow',(req,res) => {
    res.send({
        name: 'abdukadir',
        phone: 618995837,
        role: 'boss'
    })
})

app.post('/api',(req,res) => {
    console.log(req.body);
    res.send({
        batchId: "e4e2e063-a31c-42b7-b6d0-a9837273bec6",
        messageCount: 6
    })
})




app.listen(3001,() => {
    console.log("listening on port 3001...");
})