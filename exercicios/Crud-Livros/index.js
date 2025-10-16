const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())


const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env


const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch(err => console.error("❌ Erro ao conectar no MongoDB:", err))


const LivroModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
}))


app.post('/livros', async (req, res) => {
  try {
    const { titulo, autor, editora, ano, preco } = req.body

    
    if (!titulo || !autor || !editora || !ano || !preco) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios!" })
    }

    const livroCriado = await LivroModel.create({ titulo, autor, editora, ano, preco })
    res.status(201).json(livroCriado)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar livro", detalhes: error.message })
  }
})


app.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find()
    res.json(livros)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar livros", detalhes: error.message })
  }
})


app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await LivroModel.findById(req.params.id)
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json(livro)
  } catch (error) {
    res.status(400).json({ erro: "ID inválido", detalhes: error.message })
  }
})


app.put('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, autor, editora, ano, preco } = req.body

    if (!titulo || !autor || !editora || !ano || !preco) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios!" })
    }

    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, { titulo, autor, editora, ano, preco }, { new: true })
    if (!livroAtualizado) return res.status(404).json({ erro: "Livro não encontrado!" })

    res.json(livroAtualizado)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar livro", detalhes: error.message })
  }
})


app.delete('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
    const livroRemovido = await LivroModel.findByIdAndDelete(id)
    if (!livroRemovido) return res.status(404).json({ erro: "Livro não encontrado!" })

    res.json({ mensagem: " Livro excluído com sucesso!" })
  } catch (error) {
    res.status(500).json({ erro: "Erro ao excluir livro", detalhes: error.message })
  }
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
