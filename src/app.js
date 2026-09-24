import express from 'express' // importa o framework Express

const app =  express()

// Criando a rota raiz
app.get('/', (req, res) => {  // request = requisição do cliente e response = resposta enviada pelo servidor
    res.send('Minha API REST com Express') // resposta do servidor
})

export default app;



