const express = require('express');
const router = express.Router();

let professores = [
  {
    id: 1,
    nome: "Gustavo Clay",
    email: "gustavo@email.com",
    cpf: "34590034509",
    curso: "BackEnd",
    disciplina: "ADS"
  },
  {
    id: 2,
    nome: "Alessandro Borges",
    email: "alessandro.borges@email.com",
    cpf: "23578900678",
    curso: "Banco de Dados",
    disciplina: "ADS"
  }
];

// GET /professores
router.get('/professor', (req, res) => {
  res.json(professores);
});

// GET /professores/:id
router.get('/professores:id', (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ erro: 'Professor não encontrado' });
  }

  res.json(professor);
});

// POST /professores
router.post('/professores', (req, res) => {
  const { nome, email, cpf, curso, disciplina } = req.body;

  if (!nome || !email || !cpf || !curso || !disciplina) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  if (professores.some(p => p.cpf === cpf)) {
    return res.status(409).json({ erro: 'CPF já cadastrado' });
  }

  const novoProfessor = {
    id: professores.length + 1,
    nome,
    email,
    cpf,
    curso,
    disciplina
  };

  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

// PUT /professores/:id
router.put('/professores:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = professores.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado' });
  }

  const { nome, email, cpf, curso, disciplina } = req.body;

  if (!nome || !email || !cpf || !curso || !disciplina) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  professores[index] = { id, nome, email, cpf, curso, disciplina };
  res.json(professores[index]);
});

// DELETE /professores/:id
router.delete('/professores:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = professores.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Professor não encontrado' });
  }

  professores.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
