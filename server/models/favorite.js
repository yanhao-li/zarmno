module.exports = function CollectionFunc(sequelize, DataTypes) {
  const Favorite = sequelize.define('RestaurantCollect', {
    user_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    restaurant_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
    },
  });
  return Favorite;
};
