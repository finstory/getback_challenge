import React from "react";
import css from "../../../assets/css/components/home/gallery.module.css";

export const Card = () => {
  return (
    <div className={css.card}>
    <div className={css.body}>
      <div className={css.title}>FROENS - Polerón de Ca...</div>
      <div className={css.bottom}>
        <div className={css.price}>$ 100.02</div>
        <div className={css.details}>
          <button>Detalles</button>
        </div>
      </div>
    </div>
  </div>
  );
};
