import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/Student';
import User from '../models/User';

const models = [Student, User];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
