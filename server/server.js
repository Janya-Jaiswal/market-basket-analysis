import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import keys from './src/config/environmentVariables/secret.js';
import allRoutes from './src/routes/allRoutes.js';
// Initialize Firebase
import './src/config/db/connection.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
// Use all routes
allRoutes(app);

app.get('/', (request, response) => {
  response.status(200).json({
    Message: 'Server is running succesfully',
    status: 200,
    successful: true,
  });
});

app.listen(keys.port, () => {
  console.log('server is running on port ' + keys.port);
});
