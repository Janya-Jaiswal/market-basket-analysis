import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import keys from './src/config/environmentVariables/secret.js';

const app = express();
app.use(express.json());
app.use(cors()); //enable cors for all origins
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
console.log(keys);

app.get('/', (request, response) => {
  response.status(200).json({
    Message: 'Server is running succesfully',
    status: 200,
    successful: true,
  });
});

app.listen(keys.port, () => {
  console.log('server is running');
});
