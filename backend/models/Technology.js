import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Technology = sequelize.define('technology', {
  tool: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Technology;
