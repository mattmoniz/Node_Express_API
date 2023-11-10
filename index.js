import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`The Server is running on port http://localhost:${PORT}`));