import React from "react";
import css from "../../../assets/css/components/home/gallery.module.css";

export const Card = ({ name = "", price = 2, image }) => {
  price = price.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
  name = name.length > 60 ? name.slice(0, 60) + "..." : name;
  return (
    <div
      className={css.card}
      style={{
        backgroundImage: `url(${image})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className={css.body}>
        <div className={css.title}>{name}</div>
        <div className={css.bottom}>
          <div className={css.price}>{price}</div>
          <div className={css.details}>
            <button>Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};
