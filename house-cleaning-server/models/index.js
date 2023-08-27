import Sequelize from 'sequelize';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const env = process.env.NODE_ENV || 'development';
import dbConfig from '../config/config.js'; 
const config = dbConfig[env];

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
)

db.sequelize = sequelize;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basename = path.basename(__filename);
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    console.log(file, model.name);
    db[model.name] = model;
    model.initiate(sequelize);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
