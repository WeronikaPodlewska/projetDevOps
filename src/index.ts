import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.get('/weronika', (_req,res)=>{
    res.send('Route de Weronika');
});

app.get('/evrim', (_req, res) => {
  res.send('Route de Evrim');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;

//wiam test ajout de ligne 