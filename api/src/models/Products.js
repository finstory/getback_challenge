const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "Product",
    {
      product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        validate: { isUUID: 4 },
      },
      parent_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: { isUUID: 4 },
      },
      init: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      external_id: {
        type: DataTypes.STRING,
        defaultValue: "",
        validate: { notEmpty: false },
      },

      search_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: false },
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: false },
      },

      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

      image: {
        type: DataTypes.TEXT,
        defaultValue: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1686530902/shop-mugs/3106921_i0bgb6.png",
        validate: {
          isUrl: true,
          notEmpty: false,
        },
      },

      json_product: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      sku: {
        type: DataTypes.STRING,
        defaultValue: "",
      },

      store_product_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        validate: { notEmpty: false },
      },

    },
    { timestamps: true }
  );
};
