import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Purchasing = sequelize.define('purchasing', {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Purchasing;
