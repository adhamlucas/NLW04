import express from 'express';

const app = express();


// http://localhost:3333/users

app.get('/', (request, response) => {
  return response.json({ message: "Hello World - Nlw 04" });
})

// 1 param => Rota(Recurso API)
// 2 param => request, resposne

app.post("/", (request, response) => {
  // Recebeu os dadso para salvar
  return response.json({ message: "Os dados foram salvos com sucesso!" })
})

app.listen(3333, () => console.log('Server is running!'));