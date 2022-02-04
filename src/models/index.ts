import {Sequelize, Model} from 'sequelize-typescript';
import con from '../config/connection';

export const sequelize = new Sequelize({
    database : con.database,
    username : con.username,
    password : con.password,
    dialect : con.dialect,
    host : con.host,
    dialectOptions : con.dialectOptions,
    timezone : con.timezone,
    //models : [__dirname + '../models/*.ts'],
    repositoryMode : true
});
