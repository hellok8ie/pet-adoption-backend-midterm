import { InferAttributes, InferCreationAttributes, Model, DataTypes, Sequelize } from "sequelize";

export class Cat extends Model <InferAttributes<Cat>, InferCreationAttributes<Cat>>{
    declare catId: number;
    declare name: string;
    declare imgUrl: string;
    declare age: string;
    declare gender: string;
    declare breed: string;
    declare description: string;
};

export function CatFactory (sequelize: Sequelize) {
    Cat.init({
        catId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'cat',
        sequelize
    });
};