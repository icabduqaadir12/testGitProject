const express = require('express');
const app = express();

app.get('/wow',(req,res) => {
    res.send({
        name: 'abdukadir',
        phone: 618995837,
        role: 'boss'
    })
})





app.listen(3001,() => {
    console.log("listening on port 3001...");
})