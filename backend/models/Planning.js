import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Planning = sequelize.define('planning', {
  project: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Planning;
