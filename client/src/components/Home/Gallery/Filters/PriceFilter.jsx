import React, { useState } from "react";
import css from "../../../../assets/css/components/home/filters.module.css";

export const PriceFilter = ({
  onChange,
  value,
  setPriceFilter,
  setPriceComparisonFilter,
}) => {
  const [priceComparisonName, setPriceComparisonName] = useState("Ninguno");
  const [activePriceComparison, setActivePriceComparison] = useState(false);

  const handelPriceSubmit = () => {
    if (priceComparisonName !== "Ninguno") setPriceFilter(value || 0);
    else alert("debés seleccionar un tipo de comparación!.");
  };

  const handleSelectorComparison = (option, name) => {
    setActivePriceComparison(!activePriceComparison);
    setPriceComparisonFilter(option);
    setPriceComparisonName(name);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handelPriceSubmit();
    }
  };

  return (
    <div className={css.filter}>
      <div
        className={css.box}
        onClick={() => {
          setActivePriceComparison(!activePriceComparison);
        }}
      >
        <p>{priceComparisonName}</p>
        <p className={css.selector_btn}>▼</p>
        <div
          className={css.selector}
          style={
            activePriceComparison
              ? {
                  zIndex: 1,
                  animation: "slideDown 0.2s ease-out",
                }
              : {
                  zIndex: -4,
                  animation: "slideUp 0.2s ease-out",
                  animationFillMode: "forwards",
                }
          }
        >
          <div
            className={css.option}
            onClick={() => {
              handleSelectorComparison("", "Ninguno");
            }}
          >
            Ninguno
          </div>
          <div
            className={css.option}
            onClick={() => {
              handleSelectorComparison("<", "Menor Que");
            }}
          >
            Menor Que
          </div>
          <div
            className={css.option}
            onClick={() => {
              handleSelectorComparison("=", "Igual Que");
            }}
          >
            Igual Que
          </div>
          <div
            className={css.option}
            onClick={() => {
              handleSelectorComparison(">", "Mayor Que");
            }}
          >
            Mayor Que
          </div>
        </div>
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
