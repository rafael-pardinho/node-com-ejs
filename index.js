const express = require('express');
const app = express();
const port = 3000

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

app.listen(port, () => {
    console.log(`servidor esta rodando na porta ${port}`)
})