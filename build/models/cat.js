"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatFactory = exports.Cat = void 0;
const sequelize_1 = require("sequelize");
class Cat extends sequelize_1.Model {
}
exports.Cat = Cat;
;
function CatFactory(sequelize) {
    Cat.init({
        catId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'cat',
        sequelize
    });
}
exports.CatFactory = CatFactory;
;
