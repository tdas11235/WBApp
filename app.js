const express= require('express');
const app= express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var jokes= [];

//routes
app.get('/', (req, res)=> {
    res.render('index');
})
app.get('/notif', (req, res)=> {
    res.render('notif', {jokes: jokes});
})

port= 8000;

app.listen(port, ()=> console.log(`server listening to port ${port}`));