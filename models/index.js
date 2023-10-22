const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('myappdb', 'root', 'examplepassword', {
  host: 'db',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create the User table if it doesn't exist
User.sync({ force: false });