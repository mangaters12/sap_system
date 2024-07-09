import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  division: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
});

export default User;
