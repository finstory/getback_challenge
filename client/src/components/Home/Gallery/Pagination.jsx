import React, { useEffect } from "react";
import { useProductsServices } from "../../../services/useProductsServices";
import css from "../../../assets/css/components/home/pagination.module.css";

export const Pagination = () => {
  const {
    products: {
      filters: { current_page },
      pages_total,
    },
    setCurrentPage,
  } = useProductsServices();

  const insertPageBtn = () => {
    let btnListToInsert = [];
    let btnSelectedStyle = { color: " #fdfdfd", backgroundColor: "#3A5AC5" };
    for (let i = 1; i < pages_total + 1; i++) {
      const box = (
        <button
          key={i}
          onClick={() => {
            setCurrentPage(i);
          }}
          style={i === current_page ? btnSelectedStyle : {}}
        >
          {i}
        </button>
      );
      btnListToInsert.push(box);
    }
    return btnListToInsert;
  };

  return (
    <div className={css.pagination}>{insertPageBtn().map((btn) => btn)}</div>
  );
};
