import React from "react";
import css from "../../assets/css/components/home/filters.module.css";
export const Filters = () => {
  return (
    <section className={css.filters_container}>
      <form>
        <div className={css.label}>
          <label> Busca lo que quieras y cambialo fácilmente</label>
        </div>
        <div className={css.search}>
          <div className={css.input_wrap}>
            <input
              id="searchByTagName"
              type="text"
              placeholder="BLACK DECKER 20"
            />
          </div>
        </div>
        <div className={css.filter}>
          <div className={css.box}>
            <p>Ninguno</p>
            <p className={css.selector_btn}>▼</p>
          </div>
          <div className={css.box}>
            <div className={css.input_wrap}>
              <input id="searchByTagName" type="text" placeholder="Precio" />
            </div>
          </div>
          <div className={css.box}></div>
        </div>
      </form>
    </section>
  );
};
