
module.exports = function UserFunc(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordDigest: { type: DataTypes.STRING, allowNull: false },
    role: {type: DataTypes.STRING, allowNull: false},
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
    },
  });
  return User;
};
