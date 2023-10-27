import React, { useEffect } from "react";
import { useProductsServices } from "../services/useProductsServices";
import css from "../assets/css/components/home/home.module.css";
import { Filters } from "../components/Home/Gallery/Filters/Filters";
import { Gallery } from "../components/Home/Gallery/Gallery";
import { Pagination } from "../components/Home/Gallery/Pagination";
import { Header } from "../components/Global/Header";
import { Footer } from "../components/Global/Footer";

export const Home = () => {

  return (
    <>
      <div className={css.home}>
        <Header />
        <Filters />
        <main>
          <Gallery />
          <Pagination />
        </main>
        <Footer />
      </div>
    </>
  );
};
