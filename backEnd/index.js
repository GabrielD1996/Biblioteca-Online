const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const bodyParser = require('body-parser');
const livroModel = require('./src/models/livros/livro.model');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/livros', async (_, res) => {
    const livros = await livroModel.find({});
    if (livros.length === 0) {
        return res.status(404).send('Livros não encontrados.');
    } else {
        return res.status(200).json(livros);
    }
});


app.get('/livros/:id', async (req, res) => {
    const livro = await livroModel.find({ id: req.params.id });
    if (livro.length === 0) {
        return res.status(404).send('Livro não encontrado.');
    } else {
        return res.status(200).json(livro);
    }
})

app.post('/livros', async (req, res) => {

    if (!req.body.id || !req.body.titulo || !req.body.num_paginas || !req.body.isbn || !req.body.editora) {
        return res.status(400).json({ message: 'Todos os campos são obrigatorios' });
    }
    try {
        const livroExistente = await livroModel.findOne({ id: req.body.id });
        if (livroExistente) {
            return res.status(409).json({ message: 'Livro já existe' });
        }

        const livro = await livroModel.create({
            id: req.body.id,
            titulo: req.body.titulo,
            num_paginas: req.body.num_paginas,
            isbn: req.body.isbn,
            editora: req.body.editora
        });

        return res.status(201).json( { message: 'Livro criado com sucesso', livro });
    } catch (error) {
        console.error('erro ao criar', error);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
});
 app.put('/livros/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    if (!req.body.titulo ||!req.body.num_paginas ||!req.body.isbn ||!req.body.editora) {
        return res.status(400).json({ message: 'Todos os campos são obrigatorios' });
    }

    try {
        const livro = await livroModel.findOne({ id: id });

        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        const livroAtualizado = await livroModel.findByIdAndUpdate(livro._id, {
            titulo: req.body.titulo,
            num_paginas: req.body.num_paginas,
            isbn: req.body.isbn,
            editora: req.body.editora
        }, { new: true });

        if (!livroAtualizado) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        return res.status(200).json({  message: 'Livro atualizado com sucesso', livroAtualizado });   
    } catch (error) { 
        console.error('Erro ao atualizar', error);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});