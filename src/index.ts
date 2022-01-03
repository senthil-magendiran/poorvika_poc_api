import express from 'express';
import RoutePaths from './controllers';
import DBConnection from './utils/DBConnection';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(RoutePaths);

app.listen(PORT, () => {
  DBConnection();
  console.log(`Server is running at http://localhost:${PORT}`);
});