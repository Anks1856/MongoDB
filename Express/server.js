const express = require('express');
const app = express();
const model = require('./MongoDB/Models');

app.get('/',(req , res )=>{
    res.send('Hello developers!');
});

// use postman to get post request

app.post('/register' , [express.json()], async (req , res)=>{

    let user = new model.User(req.body);
    let result = await user.save();
    res.send('You are register successfully!');
});

app.post('/addStudent' , [express.json()] ,async (req , res)=>{

    let student = new model.Student(req.body);
    let result = await student.save();
    res.send('Student added successfully!');

});


app.listen(5000 , ()=>{
    console.log('Server is running on port 5000.....');
});