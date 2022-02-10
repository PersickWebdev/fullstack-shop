import express from 'express';
import cors from 'cors';
import { DatabaseSettings } from './config/settings'
import {sequelize} from "./config/database";

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`===> Server has been started on port ${PORT}`));

(async () => {
    const [results, metadata] = await sequelize.query("SELECT NOW()");
    console.log(results);
})()
