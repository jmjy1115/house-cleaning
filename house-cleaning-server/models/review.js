import Sequelize from 'sequelize';

class Review extends Sequelize.Model {
  static initiate(sequelize) {
    Post.init({
      title: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  
  static associate(db) {}
}

export default Review;
