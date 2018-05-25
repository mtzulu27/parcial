const express = require('express');
const engines = require('consolidate');
const app = express();
const bodyParser = require('body-parser');

app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});
/*
app.get('/test/:id',(req,res)=>{
    res.render('test',{output: req.params.id});
})

app.post('/test/submit', (req,res)=>{
    var id = req.body.id;
    res.redirect('/test/'+id);
})
*/
app.listen(3000,()=>console.log('Listening on 3000'));