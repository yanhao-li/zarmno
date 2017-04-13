

module.exports = function RestaurantFunc(sequelize, DataTypes) {
  const Restaurant = sequelize.define('Restaurant', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    ownerid: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
      associate(models) {
        Restaurant.belongsTo(models.User);
      },
    },
  });
  return Restaurant;
};
