const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Importando as rotas
const alunosRoutes = require('./routes/alunos');
const professoresRoutes = require('./routes/professores');

// Mapeando as rotas
app.use('/alunos', alunosRoutes);
app.use('/professores', professoresRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
    })