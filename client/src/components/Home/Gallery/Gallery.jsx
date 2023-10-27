import React, { useEffect } from "react";
import css from "../../../assets/css/components/home/gallery.module.css";
import { Card } from "./Card";
import { useProductsServices } from "../../../services/useProductsServices";

export const Gallery = () => {
  const {
    products: { filters },
    filterProducts,
  } = useProductsServices();

  useEffect(() => {
    filterProducts();
  }, [JSON.stringify(filters)]);

  const {
    products: { products_list },
  } = useProductsServices();
  return (
    <section className={css.gallery}>
      {products_list.length > 0 &&
        products_list.map((product) => (
          <Card key={product.product_id} {...product} />
        ))}
    </section>
  );
};
