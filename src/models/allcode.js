'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AllCode.init({
    // id: DataTypes.INTEGER,
    key: DataTypes.STRING,
    type: DataTypes.STRING,
    valueVi: DataTypes.STRING, //ten tieng viet cua code do
    valueEn: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AllCode',
  });
  return AllCode;
};