import React, { useEffect } from "react";
import css from "../../../../assets/css/components/home/filters.module.css";
import { useProductsServices } from "../../../../services/useProductsServices";
import { useForm } from "../../../../hooks/useForm";
import { TagNameFilter } from "./TagNameFilter";
import { PriceFilter } from "./PriceFilter";
export const Filters = () => {
  const { setTagNameFilter, setPriceFilter, setPriceComparisonFilter } =
    useProductsServices();
  const { values, handleInputChange, reset } = useForm({
    searchByTagName: "",
    searchByPrice: "",
  });

  return (
    <section className={css.filters_container}>
      <form>
        <div className={css.label}>
          <label> Busca lo que quieras y cambialo fácilmente!</label>
        </div>
        <TagNameFilter
          value={values.searchByTagName}
          onChange={handleInputChange}
          setTagNameFilter={setTagNameFilter}
        />
        <PriceFilter
          value={values.searchByPrice}
          onChange={handleInputChange}
          setPriceFilter={setPriceFilter}
          setPriceComparisonFilter={setPriceComparisonFilter}
        />
      </form>
    </section>
  );
};
