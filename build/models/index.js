"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const cat_1 = require("./cat");
const dbName = 'petDb';
const username = 'root';
const password = 'password1';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, cat_1.CatFactory)(sequelize);
exports.db = sequelize;
