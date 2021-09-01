'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      
    },
    article: DataTypes.TEXT,
    youtube_code: DataTypes.TEXT,
    released_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};