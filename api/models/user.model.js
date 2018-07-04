'use strict';
const bcrpyt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLongEnouth(value) {
          if (value.length < 8) {
            throw new Error('Password must be greater than 8 characters');
          }

          const salt = bcrypt.genSaltSync(30);
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue('password', hash);
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
