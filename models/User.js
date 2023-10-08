// models/User.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      // Add more fields as needed
    });
  
    return User;
  };
  