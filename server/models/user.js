
module.exports = function UserFunc(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordDigest: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    avatar_url: { type: DataTypes.STRING, allowNull: true },
    name: {type: DataTypes.STRING, allowNull: true},
    phone: {type: DataTypes.STRING, allowNull: true},
    gender: {type: DataTypes.STRING, allowNull: true},
    country: {type: DataTypes.STRING, allowNull: true},
    state: {type: DataTypes.STRING, allowNull: true},
    city: {type: DataTypes.STRING, allowNull: true},
    street1: { type: DataTypes.STRING, allowNull: false },
    street2: { type: DataTypes.STRING, allowNull: true },
    zipcode: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return User;
};
