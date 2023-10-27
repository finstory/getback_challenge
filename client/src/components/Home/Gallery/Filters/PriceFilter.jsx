import React from "react";
import css from "../../../../assets/css/components/home/filters.module.css";

export const PriceFilter = ({
  onChange,
  value,
  setPriceFilter,
  setPriceComparisonFilter,
}) => {
  const handelPriceSubmit = () => {
    setPriceFilter(value || 0);
  };

  const handelPriceComparisonSubmit = (priceComparison) => {
    setPriceComparisonFilter(priceComparison);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handelPriceSubmit();
    }
  };

  return (
    <div className={css.filter}>
      <div className={css.box}>
        <p>Ninguno</p>
        <p className={css.selector_btn}>▼</p>
      </div>
      <div className={css.box}>
        <div className={css.input_wrap}>
          <input
            name="searchByPrice"
            type="text"
            placeholder="Precio"
            onChange={onChange}
            value={value}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
      <div className={css.box} onClick={handelPriceSubmit}>
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1689063584/shop-mugs/tilde_qzbii7.png"
          alt="glass"
        />
      </div>
    </div>
  );
};
