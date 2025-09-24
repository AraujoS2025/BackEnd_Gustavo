const express = require('express');
const router = express.Router();

let alunos = [
  {
    id: 1,
    nome: "João da Silva",
    email: "joao@email.com",
    cpf: "12345678900",
    telefone: "11999999999",
    dataNascimento: "2001-05-10"
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    cpf: "98765432100",
    telefone: "11888888888",
    dataNascimento: "2000-09-20"
  }
];

// GET /alunos
router.get('/alunos', (req, res) => {
  res.json(alunos);
});

// GET /alunos/:id
router.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }

  res.json(aluno);
});

// POST /alunos
router.post('/alunos', (req, res) => {
  const { nome, email, cpf, telefone, dataNascimento } = req.body;

  if (!nome || !email || !cpf || !telefone || !dataNascimento) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  if (alunos.some(a => a.cpf === cpf)) {
    return res.status(409).json({ erro: 'CPF já cadastrado' });
  }

  const novoAluno = {
    id: alunos.length + 1,
    nome,
    email,
    cpf,
    telefone,
    dataNascimento
  };

  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

// PUT /alunos/:id
router.put('/alunos:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }

  const { nome, email, cpf, telefone, dataNascimento } = req.body;

  if (!nome || !email || !cpf || !telefone || !dataNascimento) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  alunos[index] = { id, nome, email, cpf, telefone, dataNascimento };
  res.json(alunos[index]);
});

// DELETE /alunos/:id
router.delete('/alunos:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }

  alunos.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
