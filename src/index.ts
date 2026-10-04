import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.get('/wiam', (_req, res) => {
  res.send('Hello, Wiam !');
}); 
app.get('/weronika', (_req,res)=>{
    res.send('Route de Weronika');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;

//wiam test ajout de ligne 
//wiam branche test 