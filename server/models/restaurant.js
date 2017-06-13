module.exports = function RestaurantFunc(sequelize, DataTypes) {
  const Restaurant = sequelize.define('Restaurant', {
    id: { type: DataTypes.UUID, primaryKey: true, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    coverImgUrl: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    street1: { type: DataTypes.STRING, allowNull: false },
    street2: { type: DataTypes.STRING },
    zipcode: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    rating: { type: DataTypes.FLOAT, default: 0.00 },
    checkinCount: { type: DataTypes.INTEGER, default: 0 },
    favoriteCount: { type: DataTypes.INTEGER, default: 0 },
    imageCount: { type: DataTypes.INTEGER, default: 0 },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return Restaurant;
};
