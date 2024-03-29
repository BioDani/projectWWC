const {Model, DataTypes} = require('sequelize');

const sequelize = require('../utils/postgresql.config');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      len: [7, 8],
    }
  },
  name: {
    type: DataTypes.CHAR(10),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      isLowercase: true,
    }
  },
  user: {
    type: DataTypes.CHAR(20),
    allowNull: false
  }
  ,
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [10, 16],
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [9, 11],
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
});

module.exports = User;