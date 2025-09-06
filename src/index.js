import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './config/db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', userRoutes);

//Error Handling Middleware
app.use(errorHandling);

//create table
createUserTable();

//Testing POSTGRES connection
app.get('/', async(req, res) => {
    const result = await pool.query('SELECT current_database()');
    console.log(result.rows[0]);
    res.send(`The database name is: ${result.rows[0].current_database}`);
});

//Server Listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});