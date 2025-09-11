// iporta o express
const express = require('express')
// crio um roteador
const router = express.Router()

// implemento as rotas e a lógica
// CRUD de contatos (Create, Read, Update, Dalete)

// variável para guardar a lista de contatos
let contatos = ["João", "Maria"]

// buscar a lista de contatos
router.get('/contatos' , (req, res, next) => {
    res.json(contatos)
})

// cadastrar o contato
router.post('/contatos' , (req, res, next) =>{
    const {nome} = req.body
// validações
if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório!!!" })
}
if (contatos.includes(nome)) {
    return res.status(400).json({ error: "Contato já existe!!!"})
}
contatos.push(nome)
    res.status(201).json({ message: "Contato cadastrado com sucesso!!!"})
})
// deletar um contato
router.delete("/contatos/:nome", (req, res, next) => {
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato != nome)
    res.json({ message: "Contato excluido com sucesso!!!"})
})
// deletar todos os contatos
router.delete("/contatos", (req, res, next) => {
    contatos = []
    res.json({ message: "Todos os contatos foram exluidos!!!"})
})



// exporto o roteador
module.exports = router