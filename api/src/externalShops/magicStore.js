const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { URLSearchParams } = require("url");
const dotenv = require("dotenv");
dotenv.config();
const { MS_APP_KEY, MS_APP_TOKEN, MS_ACCOUNT_NAME, MS_ENVIRONMENT } =
  process.env;

const getAllProducts = async () => {
  const baseUrl = `https://${MS_ACCOUNT_NAME}.${MS_ENVIRONMENT}.com.br/api/catalog_system/pub/products/search`;
  const response = await axios.get(baseUrl, {
    headers: {
      "X-VTEX-API-AppKey": MS_APP_KEY,
      "X-VTEX-API-AppToken": MS_APP_TOKEN,
    },
  });
  return response.data;
};

function getVariants(productsList) {
  const result = [];

  function processVariants(product, index = 0) {
    //% Conditional.
    if (index === variants.length) return;

    //% Parent properties.
    const parent = {
      parent_id: uuidv4(),
      external_id: product.productId,
      json_product: JSON.stringify(product),
    };
    const variants = product.items;

    const variant = variants[index];
    const urlWithSku = variant.sellers[0].addToCartLink || "";
    const getSkuParam = new URLSearchParams(new URL(urlWithSku).search).get(
      "sku"
    );
    result.push({
      ...parent,

      //% Variant properties.

      product_id: uuidv4(),
      name: variant.nameComplete,
      search_text: variant.nameComplete,
      price: variant.sellers[0].commertialOffer.Price || 0,
      sku: getSkuParam,
      store_product_id: variant.itemId,
      image: variant.images[0].imageUrl || "",
    });

    //% Recursive call.
    processVariants(product, index + 1);
  }

  //% Iteration over products.
  for (const product of productsList) {
    processVariants(product);
  }

  return result;
}

const filterProducts = (list) => {
  const result = [];

  list.forEach((product) => {
    const parent = {
      parent_id: uuidv4(),
      external_id: product.productId,
      json_product: JSON.stringify(product),
    };

    product.items.forEach((variant) => {
      const urlWithSku = variant.sellers[0].addToCartLink || "";
      const getSkuParam = new URLSearchParams(new URL(urlWithSku).search).get(
        "sku"
      );

      result.push({
        ...parent,
        product_id: uuidv4(),
        name: variant.nameComplete,
        search_text: variant.nameComplete,
        price: variant.sellers[0].commertialOffer.Price || 0,
        sku: getSkuParam,
        store_product_id: variant.itemId,
        image: variant.images[0].imageUrl || "",
      });
    });
  });
  return result;
};

const getAllProductsFromMagicStore = async () => {
  const listProducts = await getAllProducts();
  return filterProducts(listProducts);
};

module.exports = getAllProductsFromMagicStore;
