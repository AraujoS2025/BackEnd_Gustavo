// importar o express
const express = require ('express') 
const cors = require ('cors')

// crio uma instância da aplicação 
const app = express()

// intermediários
app.use(cors()) // habilita o cors nas requisições
app.use(express.json()) // habilita receber json no corpo da requisição

// roteadores
const contatosRouter = require ('./routes/Contatos')
app.use(contatosRouter)


// executar a aplicação
app.listen (3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})