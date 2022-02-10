import express from 'express';
import cors from 'cors';
import { DatabaseSettings } from './config/settings'
import { sequelize } from './config/database';

const { EXPRESS_PORT } = DatabaseSettings || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(EXPRESS_PORT, () => console.log(`===> Server has been started on port ${EXPRESS_PORT}`));

(async () => {
    const [ results, metadata ] = await sequelize.query("SELECT NOW()");
    console.log(results);
})()
