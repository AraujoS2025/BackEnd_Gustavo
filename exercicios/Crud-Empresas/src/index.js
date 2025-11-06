require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');


const app = express();
app.use(express.json());


// Rotas
app.use('/departamentos', DepartamentoController);
app.use('/cargos', CargoController);
app.use('/funcionarios', FuncionarioController);
app.use('/projetos', ProjetoController);
app.use('/tarefas', TarefaController);


// Erro genérico
app.use((err, req, res, next) => {
console.error(err);
res.status(500).json({ error: 'Erro interno no servidor' });
});


const PORT = process.env.PORT || 3000;


async function start() {
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
if (!DB_USER || !DB_PASS || !DB_HOST || !DB_NAME) {
console.warn('Variáveis de ambiente do banco não configuradas. Verifique .env');
}


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


try {
await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Conectado ao MongoDB');


app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
} catch (err) {
console.error('Erro ao conectar ao MongoDB', err);
process.exit(1);
}
}


start();