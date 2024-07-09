import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Finance = sequelize.define('finance', {
  budget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  expenditure: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Finance;
