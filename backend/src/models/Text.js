const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Text extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        likes: Sequelize.INTEGER,
        dislikes: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Text;