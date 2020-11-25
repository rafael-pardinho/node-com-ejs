const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('principal/perfil')
})

app.listen(3000, () => {
    console.log('Servidor rodando...')
})