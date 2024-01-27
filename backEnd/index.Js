import express from 'express';
import mongoose from 'mongoose';
import { PORT } from './config.js';
import { mongoDBURL } from './configMongodb.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//midleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
//Option 1 : Allow All Origins with default of cors(*)
// app.use(cors());
//Option 2: Allow Custom Origins
app.use(
  cors({
    origin: 'http://localhost:3000  ',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }),
);

app.get('/', (request, response) => {
  console.log('request', request);
  return response.status(321).send('Welcome to my first fullStack application');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected with dataBase');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
