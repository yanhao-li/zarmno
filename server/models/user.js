module.exports = function UserFunc(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: { type: DataTypes.BIGINT(8).ZEROFILL, autoIncrement: true, primaryKey: true, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordDigest: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    avatarUrl: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    street1: { type: DataTypes.STRING },
    street2: { type: DataTypes.STRING },
    zipcode: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return User;
};
