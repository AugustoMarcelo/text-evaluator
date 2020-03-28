const Sequelize = require('sequelize');

const Text = require('../models/Text');

const databaseConfig = require('../config/database');

const models = [Text];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    
    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();