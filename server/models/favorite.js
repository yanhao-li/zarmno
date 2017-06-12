module.exports = function CollectionFunc(sequelize, DataTypes) {
  const Favorite = sequelize.define('Favorite', {
    user_id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    restaurant_id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
  }, {
    timestamps: true,
    freezeTableName: true,
    classMethods: {
    },
  });
  return Favorite;
};
