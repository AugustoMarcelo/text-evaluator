const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Text extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        funny: Sequelize.INTEGER,
        nice: Sequelize.INTEGER,
        ok: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Text;