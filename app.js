import express from 'express';
import { pokemonRouter }  from './routes/pokemonRouter.js'
import { errorHandler }  from './middleware/errorHandler.js'
import * as path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());

// app.set("views", './views');
app.set("view engine", "pug");

console.log('Hi there')
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/pokemon", pokemonRouter);


app.use(errorHandler);

// app.get('*', (req,res) => {
//   res.status(404);
// })

export default app;