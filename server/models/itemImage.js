module.exports = function CollectionFunc(sequelize, DataTypes) {
  const ItemImage = sequelize.define('ItemImage', {
    itemId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    imageId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return ItemImage;
};
