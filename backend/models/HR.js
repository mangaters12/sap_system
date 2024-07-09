import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const HR = sequelize.define('hr', {
  employeeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default HR;
