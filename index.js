const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json()); //use for POST and PUT requests,  to recognize the incoming Request Object as a JSON Object.
app.use(express.urlencoded()); //to recognize the incoming Request Object as strings or arrays.


 //Database Connection
mongoose.connect('mongodb://localhost:27017/Student_DB')
        .then(res => console.log('Connected Successfully'))
        .catch(err => console.log(err));

app.get('/', async (req, res) => {
  res.send('Hello World');
});
 
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is runnng in',port);
});
 
