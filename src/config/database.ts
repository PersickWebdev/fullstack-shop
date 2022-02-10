import { Sequelize } from 'sequelize-typescript';
import { DatabaseSettings } from './settings';

const { DB_NAME, DB_OWNER, DB_PASSWORD } = DatabaseSettings;

export const sequelize = new Sequelize({
    database: DB_NAME,
    dialect: 'postgres',
    username: DB_OWNER,
    password: DB_PASSWORD,
    storage: ':memory:',
    models: [__dirname + '/models']
});