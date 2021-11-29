import express, {json, urlencoded} from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const sigaa = require('./controllers/sigaa');

const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors({origin: '*'}));

app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  sigaa.auth(username, password)
    .then(response => {
      const data = sigaa.extractData(response, username);
      res
      .status(data.error ? 400 : 200)
      .json(data)
    })
});

app.use((_, res) => {
  return res
    .status(404)
    .json({
      message: 'Rota não encontrada.',
    });
});

export default serverless(app);