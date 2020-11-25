const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {

    var nome = 'Rafael';
    var lang = 'JavaScript';

    res.render('index', {
        nome,
        lang,
        empresa: 'rocket clouds',
        inscritos: 300
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando...')
})