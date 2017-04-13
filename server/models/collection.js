module.exports = function CollectionFunc(sequelize, DataTypes) {
  const Collection = sequelize.define('Collection', {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    owner_id: { type: DataTypes.INTEGER, allowNull: false }
  }, {

    classMethods: {
    },
  });
  return Collection;
};
