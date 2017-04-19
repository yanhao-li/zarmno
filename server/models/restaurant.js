module.exports = function RestaurantFunc(sequelize, DataTypes) {
  const Restaurant = sequelize.define('Restaurant', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    owner_id: { type: DataTypes.INTEGER, allowNull: false},
    info: { type: DataTypes.STRING, allowNull: true }
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Restaurant;
};
