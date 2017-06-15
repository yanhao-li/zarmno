module.exports = function ItemImageFunc(sequelize, DataTypes) {
  const ItemImage = sequelize.define('ItemImage', {
    itemId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
    imageId: { type: DataTypes.BIGINT(8).ZEROFILL, allowNull: false, primaryKey: true },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return ItemImage;
};
