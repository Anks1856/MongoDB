const express = require('express');
const app = express();
const model = require('./MongoDB/Models');

app.get('/',(req , res )=>{
    res.send('Hello developers!');
});

// use postman to get post request

app.post('/register' , [express.json()],(req , res)=>{
    console.log(req.body);
    let user = new model.User(req.body);
    console.log(user);
    res.send('You registred successfully!');
})


app.listen(5000 , ()=>{
    console.log('Server is running on port 5000.....');
});