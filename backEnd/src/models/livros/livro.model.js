const mongoose = require('../../config/mongo');
const { Schema } = mongoose;


// const livroSchema = new Schema(
//     {
//         id: String,
//         titulo: String,
//         num_paginas: String,
//         isbn: String,
//         editora: String
//     }
// );
const livroSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    titulo: { type: String, required: true },
    num_paginas: { type: Number, required: true },
    isbn: { type: String, required: true },
    editora: { type: String, required: true },
  });

const livroModel = mongoose.model('livro', livroSchema);

module.exports = livroModel;