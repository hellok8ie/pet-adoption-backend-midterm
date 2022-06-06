import { Sequelize } from "sequelize";
import { CatFactory } from "./cat";

const dbName= 'petDb';
const username = 'root';
const password = 'password1';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

CatFactory(sequelize);

export const db = sequelize;