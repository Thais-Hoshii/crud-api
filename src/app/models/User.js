const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING(150),
      cpf: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      email: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'users'
    });
  }
}

module.exports = User;