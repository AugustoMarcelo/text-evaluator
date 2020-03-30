module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('texts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      funny: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      nice: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      ok: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('texts');
  }
};
